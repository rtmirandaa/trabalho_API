const express = require('express');
const router = express.Router();
const controles = require('./controles')




router.get('/', controles.Void);
router.get('/clientes', controles.MostrarUsuario);
router.post('/clientes', controles.ControleNovoUsuario );
router.post('/produtos', controles.Void );
router.put('/produtos', controles.ControleAtualizarProduto );
router.delete('/produtos', controles.ControleRemoverProduto);


module.exports = router;
