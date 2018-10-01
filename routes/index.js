
const express = require('express');
const router = express.Router();
const passport = require('passport');

const { WebhookClient } = require('dialogflow-fulfillment');

const authCheck = function(req, res, next) {
  print('at authCheck');
  if(!req.user) {
    print('unauthorized');
    res.redirect('/auth/facebook')
  } else {
    print('authorized');
  }
};

router.get('/', function(req, res, next) {
  res.send('Hello from express /');
});

router.post('/dialogflowExpressFulfilment', authCheck, function(req, res, next) {
  print('at dialogflowExpressFulfilment');
  res.redirect('/auth/facebook');
  print('redirecting to /auth/facebook');
  WebhookProcessing(req, res);
});

function WebhookProcessing(request, response) {
  const agent = new WebhookClient({ request, response });
  print('incoming....');

  function getNotification(agent) {
    agent.add(`login init good ${request.user}`);
  }

  let intentMap = new Map();
  intentMap.set('Get Notification', getNotification);
  agent.handleRequest(intentMap);
}

function print(msg) {
  console.info(`**************************************************************************`);
  console.info(msg);
}
module.exports = router;
