const express = require('express');
const app = express();

const questions = require('./routers/questions');
const users = require('./routers/users');

app.use('/questions', questions);
app.use('/users', users);

module.exports = app;