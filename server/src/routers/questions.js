require('../../db/mongoose');
const express = require('express');
const router = express.Router();
const Question = require('../../db/models/Question');
const User = require('../../db/models/User');

//middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}))

//get method
router.get('/:limit', async (req, res) => {
    const questions = await getQuestions(parseInt(req.params.limit));
    res.send(questions);
});

async function getQuestions(limit) {
    const questions = await Question
        .find()
        .limit(limit)
        .sort({ views: -1 });
    return questions;
}

router.post('/', async (req, res) => {
    const userObjectId = await getUserId(req);
    const question = await createQuestion(req, userObjectId);
    const newQuestion = await new Question(question);
    const savedQuestion = await newQuestion.save();
    const questionObjectId = savedQuestion._id;
    res.status(201).json(savedQuestion);
    const result = await updateUser(questionObjectId, userObjectId);
});

async function getUserId(req) {
    const user = await User
        .findOne( {userid: req.body.userid} );
    return user._id;
};

async function createQuestion(req, userObjectId) {
    return await new Question({
        question: req.body.question,
        user: userObjectId,
        tags: req.body.tags
    });
}

async function updateUser(questionObjectId, userObjectId) {
    const questions = await getQuestionsAsked(userObjectId);
    const user = await User.findById(userObjectId);
    const length = await questions.push(questionObjectId);
    user.questionsAsked = await questions;
    const result = await user.save();
    console.log("User object "+ result);
}

async function getQuestionsAsked(userObjectId) {
    const user = await User.findById(userObjectId);
    return user.questionsAsked;
}

module.exports = router;