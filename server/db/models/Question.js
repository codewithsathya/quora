const mongoose = require('mongoose');
const connection = require('../mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true},
    question: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    tags: [{type: String}],
    views: { type: Number, default: 0 },
    isAnswered: {type: Boolean, default: false},
    answers: [{ type: Schema.Types.ObjectId, default: null }],
    noOfUpvotes: { type: Number, default: 0},
    noOfDownvotes: { type: Number, default: 0}
});

const Question = connection.model('question', QuestionSchema);

module.exports = Question;