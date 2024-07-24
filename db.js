const mongoose = require('mongoose');

const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{});

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