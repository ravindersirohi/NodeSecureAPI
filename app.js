const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/',(req, resp)=>{
    resp.send('Welcome to Restful secure API !!');
})

module.exports = app;