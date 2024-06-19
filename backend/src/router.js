const express = require('express');
const router = express.Router();
const controles = require('./controles');





router.get('/', controles.Void);
router.get('/clientes', controles.MostrarUsuario);
router.post('/produtos', controles.Void );
router.put('/produtos', controles.Void );
router.delete('/produtos', controles.Void );

module.exports = router;
