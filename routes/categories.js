const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.get("/", async (req, res) => {
  try {
    const categoriesSnapshot = await db.collection("categories").get();
    const categories = categoriesSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).send("Error getting categories");
  }
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = {
      name,
      description,
    };
    const docRef = await db.collection("categories").add(newCategory);
    res.status(201).send({ id: docRef.id, ...newCategory });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Error creating category");
  }
});

module.exports = router;
