const express = require ('express');
const router = express.Router();
const controles = require('../controles')


router.get('/', controles.Void)

module.exports = router 