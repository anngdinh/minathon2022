const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Product = new Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  img: {
    type: [String],
  },

  description: {
    type: String,
  },
  title: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
  },
  status:{
    type: String,
  }
});

module.exports = mongoose.model("Product", Product, "Product");
