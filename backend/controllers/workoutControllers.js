const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})   // fetches all of the workouts bcs of the empty curlt barckets
    res.status(200).json(workouts)
}

// get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    // add workout doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout 
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    // checking if it is a valid mongoose id, else it will throw some kind of internal error
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workout.findByIdAndDelete({ _id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)


}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, { 
        ...req.body // whatever response it get from the body that gets spread(...) and updated
    })

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}