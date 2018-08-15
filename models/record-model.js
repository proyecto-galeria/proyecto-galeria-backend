var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/proyecto-galeria')

var recordSchema = require('./schemas').RecordSchema

module.exports = mongoose.model('record', recordSchema)