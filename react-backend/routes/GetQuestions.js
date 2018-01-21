const express = require('express');
const router = express.Router();

//Database files
const Survey = require('../DatabaseFiles/Survey_Data');

router.post('/', function (req, res, next) {

    const SurveyID = req.body.SurveyID;

    Survey.findById(SurveyID, function (err, Survey) {
        res.send(Survey);
    });
});

module.exports = router;