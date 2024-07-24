const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;
// const mongoURL =
  // 'mongodb+srv://chandanmohantychandan73:<password>@cluster0.q7ja0rd.mongodb.net/'

mongoose.connect(mongoURL,{

});

const db=mongoose.connection;

db.on("connected", () => {
  console.log("Connected to mongoDB server");
});

db.on("error", (err) => {
  console.log(" mongoDB connection error",err);
});

db.on("disconnected", () => {
  console.log(" mongoDB disconnected"); 
});

module.exports = db;