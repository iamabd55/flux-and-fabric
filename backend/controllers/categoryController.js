import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("parentCategory", "name");
    if (categories.length == 0) {
      return res.status(200).json({ message: "No categories found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//Admin-only-----
export const createCategory = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }
    const checkCategoryinDB = await Category.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
    });
    
    if (checkCategoryinDB) {
      return res
        .status(400)
        .json({ message: "Category already exists by this name" });
    }

    const category = new Category({
      name,
      parentCategory: parentCategory || null,
    });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Admin
export const updateCategory = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.name = name || category.name;
    category.parentCategory =
      parentCategory !== undefined ? parentCategory : category.parentCategory;

    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Admin
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
