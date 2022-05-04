import express from 'express';
import ClickController from '../controllers/ClickController';
import ProjectController from '../controllers/ProjectController';

const router = express.Router()

router.get("/", ProjectController.index);
router.get("/:id", ProjectController.show);
router.post("/", ProjectController.store);
//router.put("/:id", ProjectController.update);
//router.delete("/:id", ProjectController.destroy);

router.post("/click/:id", ClickController.increment);

export default router;
