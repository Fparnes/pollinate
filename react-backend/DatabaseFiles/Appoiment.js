const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pollinate', { useMongoClient: true });
mongoose.Promise = require('bluebird');


const Schema = mongoose.Schema;

const Appoiment = new Schema({
    Month: Number,
    Day: Number,
    Hour: Number,
    Mintues: Number,
    AMorPM: Number,
    WorkerID: String,
    StudentID: String,
    SurveyID: String,
    QuestionOrder: [],
    QuestionAnswers:[]

});

const Appointment = mongoose.model('Appointment', Appoiment);

// const NewStudentAccount = new StudentAccount({
//     FirstName: String,
//     LastName: String,
//     Email: String
// });
//
// NewStudentAccount.save((err) => {
//     if (err) {
//         console.log('Error!');
//         console.log(err);
//        return;
//     } else {
//
//         return
//     }
// });

module.exports = Appointment;