const express = require("express");
const CategoryRoute = express.Router();
const CategoryController = require("../Controllers/CategoryController.js");

CategoryRoute.post("/", CategoryController.createCategory);
CategoryRoute.get("/", CategoryController.getCategory);
// CategoryRoute.get("/:id", CategoryController.getSingleCategory);
// CategoryRoute.put("/", CategoryController.updateCategory);

module.exports = CategoryRoute;
