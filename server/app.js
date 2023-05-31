const express = require("express");
const morgan = require("morgan");

const eventRouter = require("./routes/eventRouters");

const app = express();

//middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

//routes
app.use("/api/v1/events", eventRouter);

module.exports = app;
