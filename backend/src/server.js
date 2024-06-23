console.clear()
const express = require('express')
const app = require('./app')
const port = 8080
const router = require('./router')
app.use(router)
app.use(express.json())



app.listen(port, () => console.log('Server rodando na port ' + port));

