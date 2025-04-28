const express = require("express");
const cors = require("cors");
const { db, auth } = require("./firebase");

const app = express();
app.use(cors());
app.use(express.json());

// Example test route
app.get("/test", async (req, res) => {
  const snapshot = await db.collection("categories").limit(1).get();
  const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(docs);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
