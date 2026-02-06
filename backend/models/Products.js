import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  }
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    images: [String],
    variants: [variantSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
