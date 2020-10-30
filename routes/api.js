const router = require("express").Router();

///Workout is a mongoose Schema which originates from models/index.js
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", ({ query }, res) => {
  Workout.find({ day: { $gte: query.start, $lte: query.end } })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
  Workout.create({ doc })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
