var mongoose = require('mongoose')

var InstructionSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    concept: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

var RecordSchema = mongoose.Schema({
    user: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    comments: String,
    instruction: {
        type: mongoose.Types.ObjectId
    },
    photo: String,
    sent: Boolean,
    recipients: [String]
})

module.exports = {
    InstructionSchema,
    RecordSchema
}