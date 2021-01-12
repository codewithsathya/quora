const mongoose = require('mongoose');
const connection = require('../mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);

const UserSchema = new Schema({
    userid: { type: Number },
    questionsAsked: [{ type: Schema.Types.ObjectId, default:null}],
    answersAnswered: [{ type: Schema.Types.ObjectId, default:null}],
    mailid: { type: String },
    name: { type: String }
});

UserSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'userid',
    startAt: 1,
    incrementBy: 1
});

const User = connection.model('user', UserSchema);

module.exports = User;