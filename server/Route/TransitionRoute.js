const express = require("express");
const TransitionRoute = express.Router();
const TransitionController = require("../Controllers/TransitionController.js");

TransitionRoute.post("/", TransitionController.createTransition);
TransitionRoute.get("/", TransitionController.getTransition);
// TransitionRoute.get("/:id", TransitionController.getSingleTransition);
// TransitionRoute.put("/", TransitionController.updateTransition);

module.exports = TransitionRoute;
