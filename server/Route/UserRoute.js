const express = require("express");
const UserRoute = express.Router();
const UserController = require("../Controllers/UserController.js");
const upload = require("../middleware/handleimg.js");
UserRoute.post("/find", upload.single("img"), UserController.findUser);
UserRoute.post("/", upload.single("img"), UserController.createUser);
UserRoute.get("/", UserController.getUser);
// UserRoute.get("/:id", UserController.getSingleUser);
UserRoute.put("/", upload.single("img"), UserController.updateUser);
UserRoute.put("/point", upload.single("img"), UserController.updateUserPoint);

// updateUserPoint
module.exports = UserRoute;
