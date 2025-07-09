const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
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
      enum: ["A", "A'", "B", "C", "D", "E"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
