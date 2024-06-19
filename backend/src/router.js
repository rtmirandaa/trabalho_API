const express = require('express');
const router = express.Router();

//
const {
    EnviarProdutos,
    ControleNovoUsuario,
    MostrarUsuario,
    ControleAdicionarProduto,
    ControleRemoverProduto,
    ControleAtualizarProduto,
    PedidoProduto,
    MostrarCarrinho
}
 = require("./controles");
const {
    MiddlewareNovoUsuario,
    MiddlewareId,
    MiddlewareProduto,
    MiddlewareProdutoId,
    MiddlewareCarrinho
} = require("./intermediarios");

router.get('/', Void);
router.get('/produtos', EnviarProdutos);
router.post('/usuario', MostrarUsuario);

module.exports = {router};
