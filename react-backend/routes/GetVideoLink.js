const express = require('express');
const router = express.Router();

//Database

const Appoinment = require('../DatabaseFiles/Appoiment');
const WorkerAccount = require('../DatabaseFiles/Worker_Account');


//Getting all the users +
router.post('/', function (req, res, next) {

    const SurveyID = req.body.AppoinmentID;

    Appoinment.findById(SurveyID, function (err, Survey) {
        if(err){
            res.send(500, 'ERROR with appoinment');
            return;
        }
        WorkerAccount.findById(Survey.WorkerID, function (err, Account) {

            if(err){
                res.send(500, 'ERROR with appoinment');
                return;
            }

            res.send(Account.VideoLink);

        });
    });

});

module.exports = router;
