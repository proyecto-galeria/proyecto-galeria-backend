var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/proyecto-galeria')

var InstructionSchema = require('./schemas').InstructionSchema

module.exports = mongoose.model('instruction', InstructionSchema)