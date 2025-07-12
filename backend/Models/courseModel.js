const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    chapter: {
      type: String,
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
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", courseSchema);
