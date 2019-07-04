const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
        //google
        callbackURL: 'auth/google/redirect',
        clientID: keys.google.clientID,
        clientsecret: keys.google.clientsecret,
    }, () => {
        //back function
        console.log('call back functin here');
      
    }
    ))