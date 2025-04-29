const express = require("express");
const router = express.Router();
const db = require("../firebase");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await db.collection("categories").doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error getting category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
