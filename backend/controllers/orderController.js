import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Products.js";

// @desc    Checkout and create order
// @route   POST /api/orders/checkout
// @access  Private
export const checkoutOrder = async (req, res) => {
  try {
    const { shippingAddress } = req.body;
    console.log(shippingAddress);
    if (!shippingAddress) {
      return res.status(400).json({ message: "Shipping address is required" });
    }

    // 1. Get user cart
    const cart = await Cart.findOne({ userId: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let orderItems = [];
    let totalAmount = 0;

    // 2. Process cart items
    for (const item of cart.items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res
          .status(404)
          .json({ message: "One of the products no longer exists" });
      }

      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        productName: product.name,
        size: item.size,
        color: item.color,
        price: product.price,
        quantity: item.quantity
      });
    }

    // 3. Create order
    const order = new Order({
      userId: req.user._id,
      items: orderItems,
      shippingAddress,
      totalAmount
    });

    const createdOrder = await order.save();

    // 4. Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Get logged-in user's orders
// @route   GET /api/orders
// @access  Private
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({
      createdAt: -1
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Get single order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Ensure user owns this order
    if (order.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update order status (admin only, optional for semester)
// @route   PUT /api/orders/:id
// @access  Private/Admin
export const updateOrder = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status || order.status;
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted" });
    } catch (error) {        console.error(error);
        res.status(500).json({ message: "Server error" });
    }};

export const getAllOrders = async (req, res) => {
  try {
    
    const orders = await Order.find().sort({ createdAt: -1 });
    if(!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }};
