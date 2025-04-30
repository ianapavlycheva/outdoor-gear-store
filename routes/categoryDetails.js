const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const categoryDoc = await db.collection("categories").doc(categoryId).get();
    if (!categoryDoc.exists) {
      return res.status(404).send("Category not found");
    }
    res.status(200).json(categoryDoc.data());
  } catch (error) {
    console.error("Error getting category details:", error);
    res.status(500).send("Error getting category details");
  }
});

module.exports = router;
