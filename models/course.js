var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Course = new Schema({
  name : String,
  instructor : String,
  credits : Number,
  description : String
});

module.exports = mongoose.model( 'Course', Course );
