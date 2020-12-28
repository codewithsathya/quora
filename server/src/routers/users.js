require('../../db/mongoose');
const { json } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../../db/models/User');

router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

router.post('/', async (req, res) => {
    const user = {
        mailid : req.body.mailid,
        name : req.body.name
    };
    createUser(user)
        .then(result => res.status(201).json(result));
});

async function createUser(user) {
    const newUser = new User(user);
    const result = await newUser.save();
    return result;
}

module.exports = router;