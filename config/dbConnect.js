const mongoose = require("mongoose");

exports.connectDB = async () => {
  //connecting to the database
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected successfully");
};
