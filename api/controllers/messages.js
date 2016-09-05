var Message = require('../models/Message')

module.exports = {
  index: index,
  inbound: inbound
}

function index(req, res, next){
  Message.find({}, function(err, messages){
    if (err) throw error

    res.json({messages: messages});
  }).select('-__v');
}

function inbound(req, res, next){
  // console.log(req.body);
  var message = new Message;
  message.fromNumber = req.body.From,
  message.fromState = req.body.FromState,
  message.fromCity = req.body.FromCity,
  message.fromZip = req.body.fromZip,
  message.body = req.body.Body
  console.log(message);

  message.save(function(err){
    if (err) res.json({message: 'Could not create message b/c: ' + err});
    res.json({message: message})
  })
}
