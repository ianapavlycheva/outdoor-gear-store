const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");
// const itemController = require("../controllers/itemController");

router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:id", categoryController.getCategoryItems);
router.post("/categories", categoryController.createCategory);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

// router.get("/items/:id", itemController.getItem);
// router.post("/items", itemController.createItem);
// router.put("/items/:id", itemController.updateItem);
// router.delete("/items/:id", itemController.deleteItem);

module.exports = router;
