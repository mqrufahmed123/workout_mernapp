const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

router.post("/",async (req, res) => {

});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
