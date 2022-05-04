import { ProjectInterface } from './../models/Interfaces/ProjectIntrerface';
import Project from '../models/Schemas/Project';
import Period from '../models/Schemas/Period';
import {Request, Response} from 'express';

class ProjectController {
  async index(req: Request, res: Response) {
    const projects = await Project.find({});

    return res.json(projects);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const project = await Project.find({ id });
    if (!project) {
      return res.status(401).json({
        message: 'Projeto nao encontrado'
      })
    }

    return res.json(project);
  }

  async store(req: Request, res: Response) {
    const {
      title, image, description, participants, github, video, period_id
    } = req.body;

    const period = await Period.findOne({ _id: period_id });
    if (!period) {
      return res.status(401).json({
        message: 'Periodo nao encontrado'
      })
    }

    const project = new Project({
      title, image, description, participants, github, video, period_id: period.id
    });

    period.projects.push(project);
    period.save();

    return res.json(project);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { image, github, video } = req.body;

    const project = await Project.findByIdAndUpdate({ _id: id }, { image, github, video });

    return res.json(project);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    await Project.findByIdAndDelete(id);

    return res.send(true);
  }
}

export default new ProjectController;
