const { db } = require("../firebase");

exports.getAllItems = async (req, res) => {
  try {
    const snapshot = await db.collection("items").get();
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
};

exports.getItem = async (req, res) => {
  try {
    const doc = await db.collection("items").doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Failed to fetch item" });
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = req.body;
    const docRef = await db.collection("items").add(newItem);
    res.status(201).json({ id: docRef.id, ...newItem });
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Failed to create item" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    await db.collection("items").doc(req.params.id).update(req.body);
    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ error: "Failed to update item" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await db.collection("items").doc(req.params.id).delete();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Failed to delete item" });
  }
};
