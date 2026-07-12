import express from "express";
import {
  createPlatform,
  getPlatformById,
  getPlatforms,
  updatePlatform,
} from "../controllers/platformController.js";

const router = express.Router();

router.get("/", getPlatforms);
router.get("/:id", getPlatformById)
router.post("/", createPlatform);
router.patch("/:id", updatePlatform)

export default router;
