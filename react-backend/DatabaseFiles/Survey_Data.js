const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pollinate', { useMongoClient: true });
mongoose.Promise = require('bluebird');


const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    Name: String,
    Questions: [],
    Appointments:[],
    NumOfPeople: String
});

const Survey = mongoose.model('Survey', SurveySchema);

// var Wilfred = new Survey({
//     FirstName: 'Wilfred',
//     LastName: 'Wallis',
//     Age: 22,
//     Email: 'wwallis@u.rochester.edu',
//     FBID: 735247643311999,
//     AccessToken: String
// });
//
// Wilfred.save((err) => {
//     if (err) {
//         console.log('Error!');
//         console.log(err);
//         return;
//     }
//     console.log('we did it boyz');
// });

module.exports = Survey;