const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let User = new Schema({
  name: {
    type: String,
    unique: false,
  },
  customerId:{
    type: String,
  },
  numReceive: {
    type: Number,
  },
  numGive: {
    type: Number,
  },
  point: {
    type: Number,
  },
});

module.exports = mongoose.model("User", User, "User");
