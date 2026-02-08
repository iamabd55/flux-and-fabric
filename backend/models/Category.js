import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    trim:true
  },
  comment:{
    type: String,
    trim:true
  },
  imageUrl: {
      type: String, // cloudinary / s3 / local URL
      trim: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null
  }
});

export default mongoose.model("Category", categorySchema);
