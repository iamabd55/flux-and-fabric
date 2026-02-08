import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("parentCategory", "name");
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//Admin-only-----
export const createCategory = async (req, res) => {
  try {
    const { name, comment, imageUrl, parentCategory } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Category name is required" });
    }
    if (!comment)
      return res.status(400).json({ message: "Comment is required" });
    if (!imageUrl || imageUrl.trim() === "") {
      return res.status(400).json({ message: "Image URL is required" });
    }
    if (comment !== undefined && comment.trim() === "") {
      return res
        .status(400)
        .json({ message: "Comment cannot be empty if provided" });
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
      comment: comment ? comment.trim() : undefined,
      imageUrl: imageUrl ? imageUrl.trim() : undefined,
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
    const { name, comment, imageUrl, parentCategory } = req.body;

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.name = name || category.name;
    if (comment !== undefined) {
      if (comment.trim() === "") {
        return res.status(400).json({ message: "Comment cannot be empty" });
      }
      category.comment = comment.trim();
    }
    if (imageUrl !== undefined) {
      category.imageUrl = imageUrl.trim();
    }

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
