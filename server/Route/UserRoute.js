const express = require("express");
const UserRoute = express.Router();
const UserController = require("../Controllers/UserController.js");
const upload = require("../middleware/handleimg.js");
UserRoute.post("/", upload.single("img"), UserController.createUser);
UserRoute.get("/", UserController.getUser);
// UserRoute.get("/:id", UserController.getSingleUser);
UserRoute.put("/", UserController.updateUser);

module.exports = UserRoute;
