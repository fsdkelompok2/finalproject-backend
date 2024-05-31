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
app.use(express.json());
const corsOptions = {
  origin: process.env.FRONTEND_BASE_URL,
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use("/", router);

// Error & NotFound Handler
app.use(handler.notFound);
app.use(handler.error);

module.exports = app;
