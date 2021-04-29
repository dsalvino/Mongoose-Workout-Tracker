const router = require('express').Router();
const Workout = require('../models/workout');

//done ?
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then(workouts => {
            res.json(workouts);
        })
        .catch((err) => {
            res.json(err);
        })
});
//done
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            }
        }
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then(workouts => {
            res.json(workouts);
        })
        .catch((err) => {
            res.json(err);
        })

});
//done
router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                exercises: req.body
            }
        })
        .then(workouts => {
            res.json(workouts);
        })
        .catch((err) => {
            res.json(err);
        });

});

router.post('/api/workouts', ({ body }, res) => {
    Workout
        .create({ body })
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(({ err }) => {
            console.log(err);
        });
});

module.exports = router;