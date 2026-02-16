const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.MONGOSE_URL).then(() => {
    console.log("connected TO DB");
  });
}

module.exports = connectToDB;
