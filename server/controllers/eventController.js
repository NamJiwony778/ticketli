const Event = require("../models/eventModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllEvents = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Event.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const events = await features.query;
  res.status(200).json({
    status: "success",
    results: events.length,
    data: {
      events,
    },
  });
});
