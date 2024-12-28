const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/aiRoutes");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/product", router);

// MongoDB Connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server started at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
