const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "connection host :",
      connect.connection.host,
      " ",
      "connection name:",
      connect.connection.name
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectionDB };
