import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";
const router = express.Router();
// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
// Protected routes (admin only)
router.post("/",protect,admin, createProduct);
router.put("/:id",protect,admin, updateProduct);
router.delete("/:id",protect,admin, deleteProduct);

export default router;