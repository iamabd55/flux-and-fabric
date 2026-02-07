import express from "express";
import { createReview, getReviewsByProduct, deleteReview } from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public route to get reviews for a product
router.get("/product/:productId", getReviewsByProduct);
// Protected route to create a review
router.post("/product/:productId", protect, createReview);
// Admin route to delete a review
router.delete("/product/:id", protect, admin, deleteReview);

export default router;