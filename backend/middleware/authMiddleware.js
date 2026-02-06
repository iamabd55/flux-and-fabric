import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes middleware
export const protect = async (req, res, next) => {
  let token;

  // 1️⃣ Get token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];
        
      // 2️⃣ Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
       
      // 3️⃣ Attach user to req.user
      req.user = await User.findById(decoded.userId).select("-password"); // exclude password

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      // 4️⃣ Pass control to controller
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};
