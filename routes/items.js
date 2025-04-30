const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

// Получение всех товаров
router.get("/", async (req, res) => {
  try {
    const itemsSnapshot = await db.collection("items").get();
    const items = itemsSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(items);
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).send("Error getting items");
  }
});

module.exports = router;
