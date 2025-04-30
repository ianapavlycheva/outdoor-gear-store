const { db } = require("../firebase");

exports.getAllCategories = async (req, res) => {
  try {
    const snapshot = await db.collection("categories").get();
    const categories = [];
    snapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryDetails = async (req, res) => {
  try {
    const doc = await db.collection("categories").doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Failed to fetch category" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const docRef = await db.collection("categories").add(newCategory);
    res.status(201).json({ id: docRef.id, ...newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    await db.collection("categories").doc(req.params.id).update(req.body);
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Failed to update category" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await db.collection("categories").doc(req.params.id).delete();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Failed to delete category" });
  }
};
