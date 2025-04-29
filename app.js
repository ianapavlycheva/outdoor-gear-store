const express = require("express");
const cors = require("cors");
const { db, auth } = require("./firebase");

const inventoryRoutes = require("./routes/inventory");
const categoryRoutes = require("./routes/categories");
const categoryDetailsRoute = require("./routes/categoryDetails");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Inventory routes loaded...");
app.use("/api", inventoryRoutes);
app.use("/api", categoryRoutes);
app.use("/api/category-details", categoryDetailsRoute);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
