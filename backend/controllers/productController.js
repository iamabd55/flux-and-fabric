import Product from "../models/Products.js";

// @desc    Get all products (optional category filter)
// @route   GET /api/products
// @access  Public
export const getAllProducts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.categoryId = req.query.category;
    }

    const products = await Product.find(filter).populate("categoryId", "name");
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId",
      "name"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId, images, variants } = req.body;

    // Basic validation
    if (!name || !price || !categoryId) {
      return res.status(400).json({
        message: "Name, price, and category are required"
      });
    }

    // 🔍 Check if product already exists in same category (case-insensitive)
    const existingProduct = await Product.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
      categoryId
    });

    if (existingProduct) {
      return res.status(400).json({
        message: "Product already exists in this category"
      });
    }

    // Create product
    const product = new Product({
      name,
      description,
      price,
      categoryId,
      images,
      variants
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, categoryId, images, variants } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, categoryId, images, variants },
            { new: true }
        );  
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    } 
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
