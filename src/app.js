const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const handler = require("./middlewares/error_handler");
const router = require("./routes/router");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/", router);

// Error & NotFound Handler
app.use(handler.notFound);
app.use(handler.error);

module.exports = app;
