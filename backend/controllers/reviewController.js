import Review from "../models/Review.js";
import Game from "../models/Game.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const game = await Game.findById(req.body.game);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
