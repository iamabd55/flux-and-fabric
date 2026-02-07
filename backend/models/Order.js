import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productName: String,
  size: String,
  color: String,
  price: Number,
  quantity: Number
});

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: String,
  country: { type: String, default: "Pakistan" }
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
    totalAmount: {
      type:Number,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
