
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.serializeUser(function(user, cb) {
  console.info('at serializeUser');
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  console.info('at deserializeUser');
  cb(null, obj);
});

passport.use(
  new FacebookStrategy({
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "auth/facebook/redirect",
      scope: ['email']
    },
    function(accessToken, refreshToken, profile, cb) {
      console.info('at passport-setup');
      console.info('accessToken ', accessToken);
      console.info('refreshToken ', refreshTokenprofile);
      console.info('profile ', profile);
      console.info('cb ', cb);
      cb(null, profile);
    }
  )
);
