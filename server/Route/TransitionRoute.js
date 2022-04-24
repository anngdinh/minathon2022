const express = require("express");
const TransitionRoute = express.Router();
const TransitionController = require("../Controllers/TransitionController.js");
const upload = require("../middleware/handleimg.js");
TransitionRoute.post(
  "/",
  upload.single("img"),
  TransitionController.createTransition
);
TransitionRoute.get(
  "/",
  upload.single("img"),
  TransitionController.getTransition
);
// TransitionRoute.get("/:id", TransitionController.getSingleTransition);
// TransitionRoute.put("/", TransitionController.updateTransition);

module.exports = TransitionRoute;
