const express = require("express");
const Workout = require("../models/workoutModel");
const { 
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout } = require("../controllers/workoutControllers");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
