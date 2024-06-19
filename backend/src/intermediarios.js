const {NextFunction, Request, Response}= require ("express");
const {MostrarProdutos} = require ("./querys");

const MiddlewareNovoUsuario = async (req, res, next) => {
    const {nome, altura, nascimento, cidade} = req.body;
    if (!nome || !altura || !nascimento || !cidade) {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos'});
    } else {
        next();
    }
};
module.exports = {MiddlewareNovoUsuario}

const MiddlewareId = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
    } else {
        next();
    }
};

module.exports ={MiddlewareId};


const MiddlewareNovoProduto = async (req, res, next) => { 
    const {nome, preco, quantidade, categoria} = req.body;
    if (!nome || !preco || !quantidade || !categoria) {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos'});
    } else {
        next();
    } 
};

module.exports = {MiddlewareNovoProduto}

const MiddlewareProdutoId = async (req, res, next) => {	
const [id] = await MostrarProdutos();
const ids = [];
const idproduto = parseInt(req.params.idproduto);

for (let i = 0; i < id.length; i++) {
    ids.push(id[i].id);
} 
if (!ids.includes(idproduto)) {
    return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
} else {
    next();
} 
};

module.exports = {MiddlewareProdutoId}

const MiddlewareProduto = async (req, res, next) => { 
    const {nome, preco, quantidade, categoria} = req.body;
    if (!nome || !preco || !quantidade || !categoria) {
        return res.status(400).json({message: 'Todos os campos devem ser preenchidos'});
    } else {
        next();
    } 
};

module.exports = {MiddlewareProduto}
