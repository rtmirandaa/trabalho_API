const express = require ('express');
const {Void, ControleNovoUsuario, MostrarUsuario, ControleAdicionarProduto, ControleRemoverProduto, ControleAtualizarProduto, PedidoProduto, MostrarCarrinho} = require("./controles");
const { MiddlewareNovoProduto, MiddlewareId, MiddlewareProduto, MiddlewareProdutoId, MiddlewareCarrinho } = require("./intermediarios");
const router = express.Router();
const controles = require('./controles');
const { request } = require('http');


router.get('/', controles.Void)
router.get('/produtos', controles.EnviarProdutos)
router.get('/usuario', controles.MostrarUsuario)
router.get('/carrinho', controles.MostrarCarrinho)
router.get('/carrinho/:id', controles.MostrarCarrinho)
router.post('/carrinho/:id', controles.PedidoProduto)
router.post('/carrinho', controles.PedidoProduto)
router.post('/usuario', controles.ControleNovoUsuario)
module.exports = router 