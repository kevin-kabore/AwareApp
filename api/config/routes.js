var express = require('express');
var router = express.Router();

var messagesController = require('../controllers/messages')

router.route('/api')
  .get(messagesController.index)

// Route that receives a POST request to /sms
router.route('/api/sms')
  .post(messagesController.inbound)


module.exports = router
