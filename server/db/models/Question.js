const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    author: { type: Schema.Types.ObjectId, required: true },
    question: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    tags: [{type: String}],
    views: { type: Number, required: true },
    isAnswered: {type: Boolean, default: false},
    answers: [{ type: Schema.Types.ObjectId }]
});

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;