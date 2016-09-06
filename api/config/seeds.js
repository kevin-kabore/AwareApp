require('dotenv').load()
var mongoose = require('./database');
var Message = require('../models/Message');
var messages = [
  {
    fromNumber: '+13474972829',
    fromState: 'NY',
    fromCity: 'BROOKLYN',
    fromZip: '10009',
    body: 'There has been a robbery on 210th street. Stay clear.'
  },
  {
    fromNumber: '+13474972829',
    fromState: 'NY',
    fromCity: 'BROOKLYN',
    fromZip: '10009',
    body: 'There is a fire on 118th street. May want to take  detour!'
  },
  {
    fromNumber: '+13474972829',
    fromState: 'NY',
    fromCity: 'BROOKLYN',
    fromZip: '10009',
    body: 'BK elementary is out early due to the release of the new Bobby Shmurda mixtape. Streets are packed, avoid driving.'
  },
  {
    fromNumber: '+13474972829',
    fromState: 'NY',
    fromCity: 'BROOKLYN',
    fromZip: '10009',
    body: 'Its LIT! Stay Clear.'
  }
]

Message.remove({}, function  (err){
  if(err) console.log(err);
  Message.create(messages, function(err, messages){
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + messages.length + " messages.");
    }
    process.exit();
  });
});
