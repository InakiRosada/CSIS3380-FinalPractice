const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    score: {type: Number, required: true},
    letterGrade: {type: String, required: true}
});

const GradeModel = mongoose.model("Grademodel", gradeSchema);
module.exports = GradeModel;