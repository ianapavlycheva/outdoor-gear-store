const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

// Получение всех предметов инвентаря
router.get("/", async (req, res) => {
  try {
    const inventorySnapshot = await db.collection("inventory").get();
    const inventory = inventorySnapshot.docs.map((doc) => doc.data());
    res.status(200).json(inventory);
  } catch (error) {
    console.error("Error getting inventory:", error);
    res.status(500).send("Error getting inventory");
  }
});

module.exports = router;
