import { ProjectInterface } from './../models/Interfaces/ProjectIntrerface';
import Project from '../models/Schemas/Project'
import {Request, Response} from 'express'

class ClickController {
  async increment(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const project: ProjectInterface | null = await Project.findOneAndUpdate({ _id: id }, {
          $inc: {'times_clicked': 1}
        },
        { new: true }
      );
      if(!project) throw new Error('Projeto nao encontrado')
      return res.json(project);
    } catch (err) {
      return res.status(401).json({
        message: 'Projeto nao encontrado'
      })
    }
  }
}

export default new ClickController
