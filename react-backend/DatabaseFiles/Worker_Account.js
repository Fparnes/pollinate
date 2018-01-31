const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pollinate', { useMongoClient: true });
mongoose.Promise = require('bluebird');


const Schema = mongoose.Schema;

const WorkerAccountSchema = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    TeamId: [],
    VideoLink: String,
    AccessToken: String
});

const WorkerAccount = mongoose.model('WorkerAccount', WorkerAccountSchema);

// const NewWorkerAccount = new WorkerAccount({
//     FirstName: String,
//     LastName: String,
//     Email: String,
//     LoginToken: String,
//     TeamId: []
// });
//
// NewWorkerAccount.save((err) => {
//     if (err) {
//         console.log('Error!');
//         console.log(err);
//        return;
//     } else {
//
//         return
//     }
// });

module.exports = WorkerAccount;