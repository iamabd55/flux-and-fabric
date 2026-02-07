import express from "express";
import {
    checkoutOrder,getMyOrders,getOrderById,updateOrder,deleteOrder,getAllOrders
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";
const router = express.Router();

// Admin routes
router.put("/:id", protect, admin, updateOrder);
router.delete("/:id", protect, admin, deleteOrder);
router.get("/all" ,protect, admin, getAllOrders);

// User routes
router.post("/checkout", protect, checkoutOrder);
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getOrderById);



export default router;  