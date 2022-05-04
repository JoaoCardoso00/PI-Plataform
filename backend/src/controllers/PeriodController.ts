import Period from '../models/Schemas/Period';
import { Request, Response } from 'express'
import { PeriodInterface } from '../models/Interfaces/PeriodInterface';

class PeriodController {
  async index(req: Request, res: Response) {
    const periods = await Period.find({}).populate('projects');

    return res.json(periods);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const period = await Period.find<PeriodInterface>({ id });
    if (!period) {
      return res.status(401).json({
        message: 'Periodo nao encontrado'
      })
    }

    return res.json(period);
  }

  async store(req: Request, res: Response) {
    const { name, description } = req.body;

    const period: PeriodInterface = await Period.create({
      name,
      description
    });

    return res.json(period);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { description } = req.body;

    const period: PeriodInterface | null = await Period.findByIdAndUpdate({ _id: id }, {
      description
    }, {
      new: true
    });

    return res.json(period);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    await Period.findByIdAndDelete(id);

    return res.json(true);
  }
}

export default new PeriodController();
