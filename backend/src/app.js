const express = require('express');
const router = require('./router/router')
const app = express();
app.use(router)
app.use(express.json())


module.exports = app;