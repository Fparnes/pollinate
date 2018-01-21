const express = require('express');
const router = express.Router();

//Database
const NewSurveySchema = require('../DatabaseFiles/Student_Account');

//File to put a New Survey in the Database
router.post('/', function (req, res, next) {

    const NewPersonObject = req.body.NewPersonObject;


    const NewSurvey = new NewSurveySchema({
        FirstName: NewPersonObject.FirstName,
        LastName: NewPersonObject.LastName,
        Email: NewPersonObject.Email,
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
