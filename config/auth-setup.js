
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(
  new FacebookStrategy({
      clientID: key.facebook.clientID,
      clientSecret: key.facebook.clientSecret,
      callbackURL: "auth/facebook/redirect"
    },
    function(accessToken, refreshToken, profile, cb) {
      cb(null, user);
    }
  )
);
