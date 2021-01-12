const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const url = process.env.MONGODB_URL || 'mongodb://localhost/quora';
const connection = mongoose.createConnection(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
},() => console.log("MongoDB connected"));

module.exports = connection;