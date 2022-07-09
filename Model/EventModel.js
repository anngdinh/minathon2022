const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Event = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  listJoin: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  numRegister: {
    type: Number,
  },
  maxNumRegister:{
    type: Number,
  },
  startTime: String,
  endTime: String,
  title: String,
  img: {
    type: [String],
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Event", Event, "Event");
