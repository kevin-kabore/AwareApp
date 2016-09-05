var express = require('express');
var router = express.Router();

var messagesController = require('../controllers/messages')

router.route('/')
  .get(messagesController.index)

// Route that receives a POST request to /sms
router.route('/sms')
  .post(messagesController.inbound)


module.exports = router
