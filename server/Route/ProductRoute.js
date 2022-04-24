const express = require("express");
const ProductRoute = express.Router();
const ProductController = require("../Controllers/ProductController.js");
const upload = require("../middleware/handleimg.js");

ProductRoute.post("/", upload.single("img"), ProductController.createProduct);

ProductRoute.get("/", ProductController.getProduct);
// ProductRoute.get("/:id", ProductController.getSingleProduct);
ProductRoute.put("/", upload.single("img"), ProductController.updateProduct);

module.exports = ProductRoute;
