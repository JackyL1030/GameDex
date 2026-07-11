import moongoose from "moongoose";

const platformSchema = new moongoose.Schema({
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
});

const Platform = mongoose.model("Platform", platformSchema)
export default Platform;
