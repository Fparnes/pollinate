const express = require('express');
const router = express.Router();

//Database
const NewSurveySchema = require('../DatabaseFiles/Survey_Data');

//File to put a New Survey in the Database
router.post('/', function (req, res, next) {

    const INFO = req.body.NewSurveyObject;

    const NewSurvey = new NewSurveySchema({
        Name: INFO.Name,
        Questions: INFO.Questions,
        Appointments:[],
        NumOfPeople: INFO.NumPeople
    });

    NewSurvey.save((err) => {
        if (err) {
            console.log('Error!');
            console.log(err);
            res.send(err);
            return;
        } else {
            console.log(req.body);
            res.send('Submitted');
            return
        }
    });


});

module.exports = router;
