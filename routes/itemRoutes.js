const express = require("express");
const router = express.Router();

// Dummy data for items
const items = [
  {
    id: 1,
    name: "Tent",
    description: "4-person camping tent",
    imageURL: "tent.jpg",
  },
  {
    id: 2,
    name: "Backpack",
    description: "Hiking backpack",
    imageURL: "backpack.jpg",
  },
  // Add more items here
];

// GET all items
router.get("/", (req, res) => {
  res.json(items);
});

module.exports = router;
