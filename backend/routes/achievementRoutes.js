import express from "express";
import {
  createAchievement,
  deleteAchievement,
  getAchievementById,
  getAchievements,
  updateAchievement,
} from "../controllers/achievementController.js";

const router = express.Router();

router.get("/", getAchievements);
router.get("/:id", getAchievementById);
router.post("/", createAchievement);
router.patch("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;
