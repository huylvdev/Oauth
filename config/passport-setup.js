const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')

passport.serializeUser((user, done) => {
    done(nill, user.id)
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})
passport.use(
    new GoogleStrategy(
        {
            //google
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,

        }, (accessToken, refreshToken, profile, done) => {
            //check if user exits 
            console.log('huyhuy')
            User.findOne({ googleId: profile.id }).then((currenUser) => {
                if (currenUser) {
                    //already have the user
                    console.log('exists')
                    done(null, currenUser)
                }
                else {
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                    }).save().then((newUser) => {
                        console.log('new user created' + newUser)
                        done(null, newUser)
                    });
                }
            })
            //back function


        })
)
