import { aggregate, find, create } from '../models/Vote';
import { populate } from '../models/Project';
import { isAfter, parseISO } from 'date-fns';

class VoteController {
  async index(req, res) {
    const { filter } = req.query;

    const votes = await aggregate([
      {
        $group: {
          _id: '$project_id',
          total: { $sum: 1 },
          unique: { $addToSet: '$email' },
        },
      },
    ]);

    const populated = await populate(
      votes,
      {
        path: '_id',
        select: 'title image times_clicked period_id',
      },
    );

    const projectVotes = populated.map((query) => {
      if (query._id !== null) {
        return {
          _id: query._id._id,
          title: query._id.title,
          views: query._id.times_clicked,
          period_id: query._id.period_id,
          totalVotes: query.total,
          uniqueVotes: query.unique.length,
        };
      }

      return null;
    }).filter((element) => element !== null);

    const allVotesCount = projectVotes.reduce(
      (acc, val) => acc + val.totalVotes,
      0,
    );
    const uniqueVotesCount = projectVotes.reduce(
      (acc, val) => acc + val.uniqueVotes,
      0,
    );

    const projectsSortedByFilter = projectVotes.sort((a, b) => {
      const filterType = filter !== 'unique' &&
                          filter !== 'total' ?
                          '' :
                          `${filter}Votes`
      ;

      if (a[filterType] > b[filterType]) {
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

  async show(req, res) {
    const { projectId } = req.params;

    const votes = await find({
      project_id: projectId,
    });

    return res.json(votes);
  }

  async store(req, res) {
    const { projectId, email } = req.body;

    const date = '2020-07-19 20:59:59';
    const parsedDate = parseISO(date);
    const nowDate = new Date();

    if (isAfter(nowDate, parsedDate)) {
      return res.status(401).json({
        message: 'O tempo de votação já acabou!'
      })
    }

    try {
      const voting = await create({
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
