const express = require('express');
const router = express.Router();
const async = require('async');

//Database
const Appointments = require('../DatabaseFiles/Appoiment');
const StudentAccount = require('../DatabaseFiles/Student_Account');

//Get Appointments, then finds the names of the student
//in that appointment.
router.post('/', function (req, res, next) {

    let AppointmentsArray = [];
    Appointments.find({WorkerID: req.body._id}, function (err, Appointments) {


        async.each(Appointments, function (Appointment, callback) {

            StudentAccount.find({_id: Appointment.StudentID}, function (err, doc) {


                AppointmentsArray.push({
                    DateObject: [Appointment.Month,Appointment.Day, Appointment.Hour, Appointment.Mintues, Appointment.AMorPM],
                    PersonObject: {_id: Appointment.StudentID, Name: `${doc[0].FirstName} ${doc[0].LastName}`},
                    _id: Appointment._id
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

