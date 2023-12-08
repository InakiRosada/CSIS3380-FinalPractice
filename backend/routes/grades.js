const router = require('express').Router();
const Grades = require('../models/gradelist.model');

// Get all grades
router.route('/').get((req, res) => {
    Grades.find()
        .then((grades) => res.json(grades))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a grade
router.route('/add').post((req, res) => {
    const { firstName, lastName, score, letterGrade } = req.body;

    const newGrade = new Grades({
        firstName,
        lastName,
        score,
        letterGrade,
    });

    newGrade
        .save()
        .then(() => res.json('Grade added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a grade
router.route('/delete/:id').delete(async (req, res) => {
    try {
        await Grades.findByIdAndDelete(req.params.id);
        res.json('Grade deleted');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
