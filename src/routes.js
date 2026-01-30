const express = require('express');
const router = express.Router();
const users = require('./data');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'API funcionando' });
});

router.get('/users', (req, res) => {
    res.status(200).json(users);
});

router.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

module.exports = router;
