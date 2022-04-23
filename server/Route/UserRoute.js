const express = require("express");
const UserRoute = express.Router();
const UserController = require("../Controllers/UserController.js");

UserRoute.post("/", UserController.createUser);
UserRoute.get("/", UserController.getUser);
// UserRoute.get("/:id", UserController.getSingleUser);
UserRoute.put("/", UserController.updateUser);

module.exports = UserRoute;
