const express = require("express");
const ProductRoute = express.Router();
const ProductController = require("../Controllers/ProductController.js");

ProductRoute.post("/", ProductController.createProduct);
ProductRoute.get("/", ProductController.getProduct);
// ProductRoute.get("/:id", ProductController.getSingleProduct);
ProductRoute.put("/", ProductController.updateProduct);

module.exports = ProductRoute;
