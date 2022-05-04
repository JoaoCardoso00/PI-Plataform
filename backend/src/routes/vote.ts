import express from 'express';
import VoteController from '../controllers/VoteController';
import ResultController from '../controllers/ResultController';
import auth from '../middlewares/auth';

const router = express.Router()


router.get("/", auth, VoteController.index);
router.get("/:projectId", auth, VoteController.show);
router.get("/:projectId/emails", auth, ResultController.show);
router.post("/", VoteController.store);

export default router;
