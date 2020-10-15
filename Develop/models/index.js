///This is also exported from models/workout.js. workout.js. is requiring mongoose. "Workout" is a mongoose Schema.

//workout.js is export this as
//Which looks like this: const workoutSchema =
//new Schema(
//{
//day: {},
//exercises: [],
//}, Looks like this is incomplete with that empty object
//{}
//);
module.exports = {
  Workout: require("./workout")
};

//*** seeds.js db = require("../models")
