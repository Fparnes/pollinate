const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pollinate', { useMongoClient: true });
mongoose.Promise = require('bluebird');


const Schema = mongoose.Schema;

const StudentAccountSchema = new Schema({
    FirstName: String,
    LastName: String,
    LoginToken: String,
    Email: String,
    TeamId: []
});

const StudentAccount = mongoose.model('StudentAccount', StudentAccountSchema);

// const NewStudentAccount = new StudentAccount({
//     FirstName: String,
//     LastName: String,
//     Email: String
// });
//
// NewStudentAccount.save((err) => {
//     if (err) {
//         console.log('Error!');
//         console.log(err);
//        return;
//     } else {
//
//         return
//     }
// });

module.exports = StudentAccount;