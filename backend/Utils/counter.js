const Counter = require("../Models/counterModel");

const generateMatricule = async (role) => {
  const prefix = role === "student" ? "S" : role === "teacher" ? "T" : "M"; // M pour manager si besoin

  let counter = await Counter.findOne({ role });
  if (!counter) {
    counter = new Counter({ role, seq: 1 });
  } else {
    counter.seq += 1;
  }
  await counter.save();

  const number = counter.seq.toString().padStart(4, "0");
  return `${prefix}-${number}`;
};

module.exports = { generateMatricule };
