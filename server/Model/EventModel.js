const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Event = new Schema({
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  numRegiste: {
    type: Number,
  },

  state: {
    type: String,
  },

  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Event", Event, "Event");
