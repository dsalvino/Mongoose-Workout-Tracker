const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Enter your exercise',
            },
            type: {
                type: String,
                trim: true,
                required: 'what type is your exercise?',
            },
            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                required: 'Minutes exercised?',
            },
            distance: {
                type: Number,
            },
        },
    ],
});


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;