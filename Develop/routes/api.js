const router = require("express").Router();
///Workout is a mongoose Schema which originates from models/index.js
const Workout = require("../models/workout.js");

// your routes here

module.exports = router;

//Here are some end points I will need coming from api.js these are all async functions using fetch/await

///  THIS ONE HAS NO METHOD LISTED seems to be a GET? to define the variable `res`
//   This one is in workout.js
//   the fetch is inside: "try { }""
///  getLastWorkout() ---   fetch("api/workouts")

///    PUT this one is in api.js
///  addExercise(data) --- fetch("/api/workouts/" + id"),

///    POST this one is in exercise.js
///  createWorkout(data = {}) ---   fetch("/api/workouts")

///  THIS ONE HAS NO METHOD LISTED --  this one is in stats.js
///  getWorkoutsInRange() --- fetch(`/api/workouts/range`)
