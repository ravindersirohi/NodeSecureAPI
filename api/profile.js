const express = require('express');
const jwt = require('jsonwebtoken');
const routes = express.Router();

routes.get('/', (req, resp, next) => {
    resp.send('GET - Profile!');
});
routes.post('/', (req, resp, next) => {
    const { email } = req.body;
    console.log(req.body);
    resp.send(`POST - Create ${email} profile!`);
});
routes.post('/login', (req, resp, next) => {
    const { fullname, email } = req.body;
    console.log(req.body);
    resp.send(`Loging - ${fullname}!`);
});
module.exports = routes;