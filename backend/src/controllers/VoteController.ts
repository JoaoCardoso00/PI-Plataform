import { ProjectInterface } from '../models/Interfaces/ProjectInterface';
import Vote from '../models/Schemas/Vote';
import Project from '../models/Schemas/Project';
import { isAfter, parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

interface ProjectVotesInterface {
  _id: ObjectId;
  title: string;
  views: number;
  period_id: ObjectId;
  totalVotes: number;
  uniqueVotes: number;
}

class VoteController {
  async index(req: Request, res: Response) {
    const { filter } = req.query;

    const votes = await Vote.aggregate([
      {
        $group: {
          _id: '$project_id',
          total: { $sum: 1 },
          unique: { $addToSet: '$email' },
        },
      },
    ]);

    const populated = await Project.populate(
      votes,
      {
        path: '_id',
        select: 'title image times_clicked period_id',
      },
    );

    const projectVotes = populated.map((query): ProjectVotesInterface | null => {
      if (query._id !== null) {
        return {
          _id: query._id!,
          title: query.title,
          views: query.times_clicked,
          period_id: query.period_id,
          totalVotes: query.total!,
          uniqueVotes: query.unique?.length!,
        };
      }

      return null;
    }).filter((element) => element !== null);

    const allVotesCount = projectVotes.reduce(
      (acc: number, val) => acc + val?.totalVotes!,
      0,
    );
    const uniqueVotesCount = projectVotes.reduce(
      (acc: number, val) => acc + val?.uniqueVotes!,
      0,
    );

    const projectsSortedByFilter = projectVotes.sort((a, b) => {
      const filterType = filter !== 'unique' &&
        filter !== 'total' ?
        '' :
        `${filter}Votes`
        ;

      if (a![filterType] > b![filterType]) {
        return -1;
      }

      if (a[filterType] < b[filterType]) {
        return 1;
      }

      return 0;
    });

    return res.json({
      projects: projectsSortedByFilter,
      allVotesCount,
      uniqueVotesCount,
    });
  }

  async show(req: Request, res: Response) {
    const { projectId } = req.params;

    const votes = await Vote.find({
      project_id: projectId,
    });

    return res.json(votes);
  }

  async store(req: Request, res: Response) {
    const { projectId, email } = req.body;

    const date = '2022-05-30 23:59:59';
    const parsedDate = parseISO(date);
    const nowDate = new Date();

    if (isAfter(nowDate, parsedDate)) {
      return res.status(401).json({
        message: 'O tempo de votação já acabou!'
      })
    }

    try {
      const voting = await Vote.create({
        project_id: projectId,
        email,
      });

      return res.json(voting);
    } catch (err) {
      return res.status(400).json({
        message: 'Falha ao cadastrar',
      });
    }
  }
}

export default new VoteController();
