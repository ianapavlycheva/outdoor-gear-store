const express = require("express");
const router = express.Router();

// Dummy data for categories
const categories = [
  {
    id: 1,
    name: "Camping",
    description: "All camping gear",
    imageURL: "camping.jpg",
  },
  { id: 2, name: "Hiking", description: "Hiking gear", imageURL: "hiking.jpg" },
  // Add more categories here
];

// GET all categories
router.get("/", (req, res) => {
  res.json(categories);
});

module.exports = router;
