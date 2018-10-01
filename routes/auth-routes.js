
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', function(req, res, next) {
  console.info('at /login');
  res.send('login here');
});

router.get('/logout', function(req, res, next) {
  console.info('at /logout');
  res.send('logging out..');
});

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

// callback route for facebook for redirect to
router.get('/facebook/redirect', passport.authenticate('facebook'), function(req, res, next) {
  console.info('at /facebook/redirect');
  console.info(req.user);
  res.redirect('/dialogflowExpressFulfilment');
});

module.exports = router;