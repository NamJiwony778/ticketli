const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("../../models/eventModel");
dotenv.config({ path: "./config.env" });
console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection");
  });

const events = JSON.parse(
  fs.readFileSync(`${__dirname}/events-data.json`, "utf-8")
);

const importData = async () => {
  try {
    await Event.create(events);
    console.log("Data loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

module.exports = importData;
