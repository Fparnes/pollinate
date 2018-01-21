const express = require('express');
const router = express.Router();
const async = require('async');

//Database
const Appointments = require('../DatabaseFiles/Appoiment');
const WorkerAccount = require('../DatabaseFiles/Worker_Account');

//Get Appointments, then finds the names of the student
//in that appointment.
router.post('/', function (req, res, next) {

    let AppointmentsArray = [];
    Appointments.find({StudentID: req.body._id}, function (err, Appointments) {

        async.each(Appointments, function (Appointment, callback) {

            WorkerAccount.find({_id: Appointment.WorkerID}, function (err, doc) {
                console.log('--');
                console.log(doc);
                AppointmentsArray.push({
                    DateObject: [Appointment.Month,Appointment.Day, Appointment.Hour, Appointment.Mintues, Appointment.AMorPM],
                    PersonObject: {_id: Appointment.WorkerID, Name: `${doc[0].FirstName} ${doc[0].LastName}`}
                });
                callback();
            });

        }, function (err) {
            // if any of the file processing produced an error, err would equal that error
            if (err) {
                // One of the iterations produced an error.
                // All processing will now stop.
                console.log('A file failed to process');
            } else {
                res.send(AppointmentsArray);
            }
        });

    });

});

module.exports = router;

