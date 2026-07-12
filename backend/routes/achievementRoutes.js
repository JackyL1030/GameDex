import express from "express";
import { createAchievement, getAchievements } from "../controllers/achievementController.js";

const router = express.Router();

router.get("/", getAchievements)
router.post("/", createAchievement)

export default router;