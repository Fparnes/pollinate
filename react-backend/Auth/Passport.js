// load all the things we need
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
const User = require('../DatabaseFiles/Worker_Account');


module.exports = (passport) => {

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({

            clientID        : '306243012801-5lkr21ont1ks3djg86cj0858ogq54q1k.apps.googleusercontent.com',
            clientSecret    : 'xzxrfrf-pKxFey5Lf4GWcnCO',
            callbackURL     : 'http://localhost:3000/auth/google/callback',

        },
        (token, refreshToken, profile, done) => {

            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(() => {

                // try to find the user based on their google id
                User.findOne({ 'google.id' : profile.id }, (err, user) => {
                    if (err)
                        return done(err);

                    if (user) {

                        // if a user is found, log them in
                        return done(null, user);
                    } else {
                        // if the user isnt in our database, create a new user
                        let newUser          = new User();

                        // set all of the relevant information
                        newUser.google.id    = profile.id;
                        newUser.google.token = token;
                        newUser.google.name  = profile.displayName;
                        newUser.google.email = profile.emails[0].value; // pull the first email

                        // save the user
                        newUser.save((err) => {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });

        }));

};
