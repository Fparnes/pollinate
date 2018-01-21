const express = require('express');
const router = express.Router();

//Database
const Appointments = require('../DatabaseFiles/Appoiment');

//Get Appointments, then finds the names of the student
//in that appointment.
router.post('/', function (req, res, next) {

    const SeverResponse = req.body;

    Appointments.update({_id: SeverResponse.SurveyID}, {
        QuestionOrder: SeverResponse.QuestionOrder,
    }, function(err, affected, resp) {
        if(err){
            console.log('ERROR!:');
            console.log(err);
        } else {
            res.send('We good!')
        }
    })

});

module.exports = router;

