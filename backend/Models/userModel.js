const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    matricule: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "manager"],
      default: "student",
    },
    phone: {
      type: String,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    permis: {
      type: [
        {
          type: String,
        },
      ],
      enum: ["A", "B", "C", "D", "E"],
      default: "B",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
