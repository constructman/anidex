// external imports
const mongoose = require("mongoose");

async function dbConnect() {
  mongoose
    .connect(
      
      'mongodb://127.0.0.1:27017/anidex',
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
