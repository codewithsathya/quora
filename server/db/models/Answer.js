const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true },
    answer: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    views: { type: Number, required: true },
    noOfUpvotes: { type: Number, default: 0},
    noOfDownvotes: { type: Number, default: 0},
    comments: [{ type: Schema.Types.ObjectId }]
});

const Answer = mongoose.model('question', AnswerSchema);

module.exports = Answer;