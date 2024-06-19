const express = require('express');
const router = express.Router();
const controles = require('./controles');





router.get('/', controles.Void);
router.get('/clientes', controles.MostrarUsuario);
router.post('/produtos', controles.ControleNovoUsuario );
// router.post('/produtos', controles.Void );


module.exports = router;
