const mongoose = require("mongoose");

const connectionDB = async () => {
  const MONGO_URL = `mongodb+srv://shayan:shayan@file-shareing.bngposm.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.error("Error while connecting with the database ", error.message);
  }
};

module.exports = connectionDB;
