import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"; 
// Route imports
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
connectDB(); // connect to MongoDB

const app = express();
app.use(cors()); // Enable CORS for all routes (optional, but recommended for frontend-backend communication)

// Middleware
app.use(express.json()); // parse JSON
// optional: app.use(cors())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

// Error handling middleware (optional for semester)
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
