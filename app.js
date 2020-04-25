const express = require('express');
const bodyParser = require('body-parser');
const profile = require('./api/profile');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use('/profile', profile);

app.get('/', (req, resp) => {
    resp.send('Welcome to Restful secure API !!');
})

module.exports = app;