import express, { Request, Response } from 'express';

import periodsRouter from './periods';
import voteRouter from './vote';
import projectRouter from './project';
import { rateLimit } from 'express-rate-limit';

const router = express.Router()
// @ts-ignore
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        title: "Projeto Integrado 2022",
        version: 1
    })
})

const limiter = rateLimit({
	windowMs: 60 * 60 * 1000,
	max: 50,
	standardHeaders: true,
	legacyHeaders: false,
})

router.use('/periods', periodsRouter);
router.use('/projects', projectRouter);
router.use('/votes', limiter, voteRouter);

export default router
