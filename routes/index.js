
const express = require('express');
const router = express.Router();
const passport = require('passport');

const { WebhookClient } = require('dialogflow-fulfillment');


const authCheck = function(req, res, next) {
  console.info('at authCheck');
  if(!req.user) {
    console.info('unauthorized');
    res.redirect('/auth/facebook')
  } else {
    console.info('authorized');
  }
};

router.get('/', function(req, res, next) {
  res.send('Hello from express /');
});

router.post('/dialogflowExpressFulfilment', authCheck, function(req, res, next) {
  console.info('at dialogflowExpressFulfilment');
  WebhookProcessing(req, res);
});

function WebhookProcessing(request, response) {
  const agent = new WebhookClient({ request, response });

  function getNotification(agent) {
    agent.add(`login init good ${request.user}`);
  }

  let intentMap = new Map();
  intentMap.set('Get Notification', getNotification);
  agent.handleRequest(intentMap);
}

module.exports = router;
