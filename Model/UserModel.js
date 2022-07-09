const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let User = new Schema({
  name: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  numReceive: {
    type: Number,
  },
  numGive: {
    type: Number,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  point: {
    type: Number,
  },
});

module.exports = mongoose.model("User", User, "User");
