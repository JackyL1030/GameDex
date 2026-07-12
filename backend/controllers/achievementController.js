import Achievement from "../models/Achievement.js";
import Game from "../models/Game.js";

export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAchievement = async (req, res) => {
  try {
    const game = await Game.findById(req.body.game);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    const achievement = await Achievement.create(req.body);
    res.status(201).json(achievement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!achievement) {
      return res.status(404).json({
        message: "Achievement not found",
      });
    }
    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
