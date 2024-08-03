const express = require("express");
const mongodb = require('mongodb')
const mongoose = require("mongoose");

const app = express();
const workoutRoutes = require("./routes/workouts");

app.use(express.json());

require("dotenv").config();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); 

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connceted to DB \nlistening on port", process.env.PORT);
      console.log(process.env.MONGO_URI);
    });
  })
  .catch((error) => {
    console.log(error)
  });

  // check comment
  