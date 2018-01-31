const express = require('express');
const router = express.Router();

//Database
const WorkerAccount = require('../DatabaseFiles/Worker_Account');

//File to put a New Survey in the Database
router.post('/', function (req, res, next) {
    console.log(req.body);
    const WorkersEmail = req.body.email;
    WorkerAccount.findOneAndUpdate({Email: WorkersEmail}, { AccessToken: req.body.AccessToken }, function (err, Worker) {
        console.log('--');
        console.log(Worker);
        if(err || Worker === null){
            console.log('jhere');
            res.send(false);
        } else {
            res.send(true);
        }
    });


});

module.exports = router;
