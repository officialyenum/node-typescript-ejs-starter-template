import { Router } from "express";
import IndexController from "../controllers/index.controller";

const router = Router();

router.get("/", IndexController.index);
router.get("/about", IndexController.about);

export default router;