import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;

reviewSchema.index({ rating: -1 });
