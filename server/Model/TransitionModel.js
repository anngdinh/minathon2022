const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Transition = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userIdReceive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Transition", Transition, "Transition");
