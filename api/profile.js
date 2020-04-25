const express = require('express');
const jwt = require('jsonwebtoken');
const routes = express.Router();

routes.get('/', (req, resp, next) => {
    resp.send('GET - Profile!');
});
routes.post('/', (req, resp, next) => {
    const { fullname, email } = req.body;
    console.log(req.body);
    resp.send(`POST - Create ${fullname} profile!`);
});
routes.post('/login', (req, resp, next) => {
    const { fullname, email } = req.body;
    console.log(req.body);
    if (!fullname || !email) resp.status(401).send('Invalid user details!');
    else {
        jwt.sign({ fullname, email }, "aPikEy", (err, token) => {
            if (err)
                resp.status(400);
            else
                resp.status(200).json({ token });
        })
    }
});
module.exports = routes;