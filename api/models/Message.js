var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  fromNumber: { type: String},
  fromState: { type : String },
  fromCity : { type : String },
  fromZip: { type: String},
  body: { type : String },
  date: { type: Date, default : Date.now}
})

module.exports = mongoose.model('Message', MessageSchema);

var Message = mongoose.model("Message", MessageSchema);
