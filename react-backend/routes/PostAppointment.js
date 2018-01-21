const express = require('express');
const router = express.Router();
const async = require('async');

//Database
const NewAppoimentSchema = require('../DatabaseFiles/Appoiment');
const Survey = require('../DatabaseFiles/Survey_Data');

//File to put a New Survey in the Database
router.post('/', function (req, res, next) {

    const Output = req.body.input;
    const DATE = Output[0];
    const SurveyID = Output[3];

    const NewAppoiment = new NewAppoimentSchema({
        Month: DATE.Months,
        Day: DATE.Day,
        Hour: DATE.Hour,
        Mintues: DATE.Mintues,
        AMorPM: DATE.DayOrNight,
        WorkerID: Output[2],
        StudentID: Output[1],
        SurveyID: Output[3]
    });

    NewAppoiment.save((err) => {
        if (err) {
            console.log('Error!');
            console.log(err);
            res.send(err);
            return;
        } else {

            Survey.findByIdAndUpdate(
                SurveyID,
                {$push: {"Appointments": NewAppoiment._id}},
                {safe: true, upsert: true, new: true},
                function (err, model) {
                    console.log(err);
                }
            );

            res.send('Submitted');
            return;
        }
    });


});

module.exports = router;
