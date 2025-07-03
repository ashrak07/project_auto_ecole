const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    chapters: {
      type: String,
      required,
    },
    day: {
      type: String,
      enum: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      required: true,
    },
    startTime: {
      type: String, // Ex: "08:00"
      required: true,
    },
    endTime: {
      type: String, // Ex: "10:00"
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", courseSchema);
