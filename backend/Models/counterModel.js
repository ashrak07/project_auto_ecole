const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
  }, // "student" ou "teacher"
  seq: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Counter", counterSchema);
