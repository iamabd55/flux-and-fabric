export const admin = (req, res, next) => {
    console.log("Checking admin role for user:", req.user);
    if (req.user && req.user.role === "admin") {
      next(); // User is admin, proceed to the next middleware/controller
    } else {
        res.status(403).json({ message: "Access denied, admin only" });
    }}; 