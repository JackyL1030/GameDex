import Platform from "../models/Platform.js";

export const getPlatforms = async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPlatform = async (req,res) =>{
  try {
    const platform = await Platform.create(req.body);
    res.status(201).json(platform);
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}