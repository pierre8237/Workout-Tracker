const router = require("express").Router();
///Workout is a mongoose Schema which originates from models/index.js
const Workout = require("../models/workout.js");

// your routes here
// exporting router but it is not being invoked anywhere?

//Here are some end points I will need coming from api.js these are all async functions using fetch/await

///  THIS ONE HAS NO METHOD LISTED seems to be a GET? to define the variable `res`
//   This one is in workout.js
router.get("/api/workouts", function (req, res) {
  Workout.find().then(function (workouts) {
    res.json(workouts);
  });
});

//   the fetch is inside: "try { }""
///  getLastWorkout() ---   fetch("api/workouts")

///api////    PUT this one is in api.js
///  addExercise(data) --- fetch("/api/workouts/" + id"),
router.put("/api/workouts" + id, function (req, res) {
  Workout.findById().then(function (id) {
    res.json(id);
  });
});
///    POST this one is in exercise.js
///  createWorkout(data = {}) ---   fetch("/api/workouts")
router.post("/api/workouts/range", function (req, res) {
  Workout.req.body(range);
});
///  THIS ONE HAS NO METHOD LISTED --  this one is in stats.js
///  getWorkoutsInRange() --- fetch(/api/workouts/range)
module.exports = router;
