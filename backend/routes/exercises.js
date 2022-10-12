const router = require('express').Router();
const { findById, findByIdAndDelete } = require('../modals/exercise');
let Exercise = require('../modals/exercise')


//this end point will get all the exercises
router.route('/').get(async (req, res) => {
  const exercise = await Exercise.find()
  if (exercise) {
    res.status(200).json(exercise)
  }
  else {
    res.status(400)
    throw new Error("exercise not found")
  }
})



//this route will add all the exercises
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


//this router will delete exercise against any id

router.route('/:id').delete(async(req,res)=>{
  const deleteExercise=await Exercise.findByIdAndDelete(req.params.id);
  if(deleteExercise){
    res.json("Exercise Deleted")
  }
  else{
    throw new Error("Can't Delete !")
  }
  

});


module.exports = router;
