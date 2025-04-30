const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Outdoor Gear Store API!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
