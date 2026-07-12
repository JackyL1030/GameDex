import express from "express";
import {
  createPlatform,
  deletePlatform,
  getPlatformById,
  getPlatforms,
  updatePlatform,
} from "../controllers/platformController.js";

const router = express.Router();

router.get("/", getPlatforms);
router.get("/:id", getPlatformById)
router.post("/", createPlatform);
router.patch("/:id", updatePlatform)
router.delete("/:id", deletePlatform)

export default router;
