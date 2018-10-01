
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.serializeUser(function(user, cb) {
  print('at serializeUser');
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  print('at deserializeUser');
  cb(null, obj);
});

passport.use(
  new FacebookStrategy({
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "https://dialogflow-express-fulfillment.herokuapp.com/auth/facebook/redirect",
      scope: ['email']
    },
    function(accessToken, refreshToken, profile, cb) {
      print('at passport-setup');
      print('accessToken ', accessToken);
      print('refreshToken ', refreshToken);
      print('profile ', profile);
      print('cb ', cb);
      cb(null, profile);
    }
  )
);

function print(msg) {
  console.info(`**************************************************************************`);
  console.info(msg);
}
