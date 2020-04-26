const express = require('express');
const jwt = require('jsonwebtoken');
const keys = require('../config');
const routes = express.Router();

routes.get('/', (req, resp, next) => {
    resp.json({
        "fullname": "Test User",
        "email": "test@domain.com"
    });
});
routes.post('/', validateToken, (req, resp) => {
    resp.end;
});
routes.post('/login', (req, resp, next) => {
    const { fullname, email } = req.body;
    console.log(req.body);
    if (!fullname || !email) resp.status(401).send('Invalid user details!');
    else {
        jwt.sign({ fullname, email }, keys.secureKey, (err, token) => {
            if (err)
                resp.status(400);
            else
                resp.status(200).json({ token });
        })
    }
});
function validateToken(req, resp, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        resp.status(403).send('Forbidden!')
    }
    else {
        const bearer = authHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        jwt.verify(req.token, keys.secureKey, (error, authData) => {
            if (error)
                resp.status(403).send('Authorization Failed!');
            else
                resp.json(authData)
            next();
        });
    }
}
module.exports = routes;