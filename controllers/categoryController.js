const { db } = require("../firebase");

console.log("Type of db:", typeof db);
console.log("Type of db.collection:", typeof db.collection);

exports.getAllCategories = async (req, res) => {
  try {
    const snapshot = await db.collection("categories").get();
    const categories = [];
    snapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryItems = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const snapshot = await db
      .collection("items")
      .where("categoryId", "==", categoryId)
      .get();
    const items = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const docRef = await db.collection("categories").add(newCategory);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    await db.collection("categories").doc(categoryId).update(req.body);
    res.json({ message: "Category updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    await db.collection("categories").doc(categoryId).delete();
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
