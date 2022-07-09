const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Category = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Category", Category, "Category");
