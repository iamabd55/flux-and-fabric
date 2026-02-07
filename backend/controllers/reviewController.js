import Review from "../models/Review.js";
import Order from "../models/Order.js";

// @desc    Create a review for a product (only if delivered)
export const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { productId } = req.params;

    // 1️⃣ Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }

    // 2️⃣ Check if user has a DELIVERED order containing this product
    const deliveredOrder = await Order.findOne({
      userId: req.user._id,
      status: "delivered",
      "items._id": productId
    });

    if (!deliveredOrder) {
      return res.status(403).json({
        message: "You can only review products after delivery"
      });
    }

    // 3️⃣ Prevent duplicate review
    const alreadyReviewed = await Review.findOne({
      userId: req.user._id,
      productId
    });

    if (alreadyReviewed) {
      return res.status(400).json({ message: "You have already reviewed this product" });
    }

    // 4️⃣ Create review (no need to check Products collection)
    const review = new Review({
      userId: req.user._id,
      productId,
      rating,
      comment
    });

    await review.save();

    res.status(201).json({
      message: "Review created successfully",
      review
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all reviews for a product
export const getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ productId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 }); // latest reviews first

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete a review (admin or user)
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
