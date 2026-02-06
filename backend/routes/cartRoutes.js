import express from "express";
import { getCart, addToCart, updateCartItem, removeCartItem } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";


const router=express.Router()

router.get("/", protect, getCart);
router.post("/add", protect, addToCart);
router.put("/update/:itemId", protect, updateCartItem);
router.delete("/remove/:itemId", protect, removeCartItem);

export default router;