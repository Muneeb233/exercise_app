const router = require('express').Router();
let Exercise = require('../modals/exercise')


router.route('/').get((req, res) => {
  const exercise = Exercise.find()
  if (exercise) {
    res.status(200).json(exercise)
  }
  else {
    res.status(400)
    throw new Error("exercise not found")
  }


})

router.route('/add').post((req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  const exerciseAdded = newExercise.save();
  if (exerciseAdded) {
    res.json({ message: "Exercise Added" })
  }
  else {
    throw new Error("Exercise not added")
  }

})


module.exports = router;
