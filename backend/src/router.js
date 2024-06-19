const express = require('express');
const router = express.Router();
const {
    Void,
    ControleNovoUsuario,
    MostrarUsuario,
    ControleAdicionarProduto,
    ControleRemoverProduto,
    ControleAtualizarProduto,
    PedidoProduto,
    MostrarCarrinho
} = require("./controles");
const {
    MiddlewareNovoUsuario,
    MiddlewareId,
    MiddlewareProduto,
    MiddlewareProdutoId,
    MiddlewareCarrinho
} = require("./intermediarios");

// Rotas
router.get('/', Void);
router.get('/produtos', MostrarProdutos);
router.post('/usuario', MostrarUsuarios);

module.exports = {router};
