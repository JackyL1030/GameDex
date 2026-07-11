import mongoose from "mongoose";

const platformSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturer: {
      type: String,
      trim: true,
    },
    releaseYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Platform = mongoose.model("Platform", platformSchema);
export default Platform;
