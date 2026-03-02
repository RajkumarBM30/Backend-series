const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect(process.env.MONGOSE_URI);

  console.log("connected to DB");
}

module.exports = connectToDB;
