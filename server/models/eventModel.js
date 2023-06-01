const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "An event must have a title"],
    unique: true,
    trim: true,
  },
  entertainer: {
    type: Array,
    required: [true, "An event must have an entertainer"],
    trim: true,
  },
  imageLink: String,
  city: {
    type: String,
    required: [true, "An event must have a city location"],
    trim: true,
  },
  country: {
    type: String,
    required: [true, "An event must have a country location"],
    trim: true,
  },
  type: String,
  category: String,
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "An event must have a price"],
  },
  eventDate: Date,
  place: String,
  location: {
    type: Object,
    required: [true, "An event must have a location"],
  },
  promoted: Boolean,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
