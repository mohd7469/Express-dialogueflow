var express = require('express');
var router = express.Router();
const { WebhookClient } = require('dialogflow-fulfillment');

router.get('/', function(req, res, next) {
  res.send('Hello from express /');
});

router.post('/dialogflowExpressFulfilment', function(req, res, next) {
  WebhookProcessing(req, res);
});

function WebhookProcessing(request, response) {
  const agent = new WebhookClient({ request, response });

  function getNotification(agent) {
    agent.add('login init good')
  }

  let intentMap = new Map();
  intentMap.set('Get Notification', getNotification);
  agent.handleRequest(intentMap);
}

module.exports = router;
