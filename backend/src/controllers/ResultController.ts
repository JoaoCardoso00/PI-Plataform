import Vote from '../models/Schemas/Vote';
import { Request, Response } from 'express';
// @ts-ignore
import Project from '../models/Schemas/Project';
// @ts-ignore
import pkg from 'exceljs';
// @ts-ignore
import tempfile from 'tempfile';

const { Workbook } = pkg

class ResultController {
  // @ts-ignore

  async show(req: Request, res: Response) {
    const { projectId } = req.params;

    const votes = await Vote.find({
      project_id: projectId
    });

    if (!votes) {
      return res.status(401).json({
        message: 'Project not found'
      })
    }

    const populated = await Project.populate(
      votes,
      {
        path: 'project_id',
        select: 'title',
      },
    );

    console.log(populated);
      //@ts-ignore

    const projectTitle = populated[0]._id.title;
    const voteEmails = populated.map(vote => {
      //@ts-ignore
      return vote.email;
    });


    let result = {};
    voteEmails.forEach(x => {
      //@ts-ignore

      result[x] = (result[x] || 0) + 1;
    });


    const emailCounter = [];
    for (let i = 0; i < Object.keys(result).length; i += 1) {
      const objEmail = Object.keys(result)[i]

      emailCounter.push({
        email: objEmail,
        //@ts-ignore
        counter: result[objEmail]
      })
    }

    const workbook = new Workbook();
    const sheet = workbook.addWorksheet(projectTitle);

    sheet.columns = [
      { header: 'Email', key: 'email', width: 32 },
      { header: 'Qtde. votos', key: 'amount', width: 10 },
    ]

    emailCounter.forEach(i => {
      sheet.addRow({ email: i.email, amount: i.counter });
    })

    const tempFilePath = tempfile('.xlsx');
    await workbook.xlsx.writeFile(tempFilePath, { filename: projectTitle });

    return res.sendFile(tempFilePath);
  }
}

export default new ResultController();
