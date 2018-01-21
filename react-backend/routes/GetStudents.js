const express = require('express');
const router = express.Router();
const async = require('async');

//Database
const StudentAccount = require('../DatabaseFiles/Student_Account');
const Survey = require('../DatabaseFiles/Survey_Data');

//Getting all the users +
router.get('/', function (req, res, next) {

    async.parallel({
            one: function (parallelCb) {
                //getting hours + name
                StudentAccount.find({}, function(err, Users) {
                    parallelCb(null, {res: Users})
                });

            },
            two: function (parallelCb) {
                Survey.find({}, function(err, Survey) {
                    parallelCb(null, {res: Survey})
                });


            }
        },
        function (err, results) {

            const Users = results.one.res;
            const Survey = results.two.res;

            const SendObject = {
                Users: Users,
                Survey: Survey
            };
            res.send(SendObject)
        });




});

module.exports = router;
