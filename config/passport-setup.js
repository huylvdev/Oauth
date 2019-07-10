const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user-model')
passport.use(
    new GoogleStrategy(
        {
            //google
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,

        }, (accessToken, refreshToken, profile, done) => {
            //back function
            console.log('log setup');
            console.log(profile.displayName);
            var newUser = new User({
                username: profile.displayName,
                googleId: profile.id,
            })
            console.log('huyhuy' + newUser)
        })
)
