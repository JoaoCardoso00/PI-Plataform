import express, { Request, Response } from 'express';

import periodsRouter from './periods';
import voteRouter from './vote';
import projectRouter from './project';
import client from '../lib/redis';

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        title: "Projeto Integrado 2022",
        version: 1
    })
})

router.use('/periods', periodsRouter);
router.use('/projects', projectRouter);
router.use('/votes', voteRouter);

export default router
