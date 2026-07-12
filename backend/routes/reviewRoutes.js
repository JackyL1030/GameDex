import express from "express";
import {
  createReview,
  deletedReview,
  getReviewById,
  getReviews,
  updateReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post("/", createReview);
router.patch("/:id", updateReview);
router.delete("/:id", deletedReview);

export default router;
