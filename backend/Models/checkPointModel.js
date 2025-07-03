const mongoose = require("mongoose");

const checkPointSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // si les enseignants sont dans la collection "users"
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isDone: {
      type: Boolean,
      default: true, // le checkpoint indique que le cours a été effectué
    },
    comment: {
      type: String,
      default: "", // commentaire facultatif du professeur
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Check", checkPointSchema);
