import Platform from "../models/Platform.js";

export const getPlatforms = async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPlatform = async (req, res) => {
  try {
    const platform = await Platform.create(req.body);
    res.status(201).json(platform);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getPlatformById = async (req, res) => {
  try {
    const platform = await Platform.findById(req.params.id);
    if (!platform) {
      return res.status(404).json({ message: "Platform not found" });
    }
    res.status(200).json(platform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlatform = async (req, res) => {
  try {
    const platform = await Platform.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!platform) {
      return res.status(404).json({ message: "Platform not found" });
    }
    res.status(200).json(platform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePlatform = async (req, res) => {
  try {
    const platform = await Platform.findByIdAndDelete(req.params.id);
    if (!platform) {
      return res.status(404).json({ message: "Platform not found" });
    }
    res.status(200).json({ message: "Platform deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
