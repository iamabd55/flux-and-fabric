import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productName: String,
  size: String,
  color: String,
  price: Number,
  quantity: Number
});

const addressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  street: String,
  city: String,
  postalCode: String,
  country: String
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [orderItemSchema],
    shippingAddress: addressSchema,
    totalAmount: Number,
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
