const express = require('express');
const {Request, Response} = require ("express");
const querys = require ("./querys");
const { log } = require ("console");

const Void = async(req, res)=>{
    return res.status(200).json({Aviso: "Endpoint"})

}

module.exports = {
    Void
}

const EnviarProdutos = async (req, res) => {
    try {
        const [result] = await MostrarProdutos();
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleNovoUsuario = async (req, res) => {
    try {
        const { nome, altura, numero, nascimento, cidade, endereco } = req.body;
        const [result] = await NovoUsuario(nome, altura, numero, nascimento, cidade, endereco);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const MostrarUsuario = async (req, res) => {
    try {
        const [result] = await querys.MostrarUsuario();
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleAdicionarProduto = async (req, res) => { 
    try {
        const { nome, preco, quantidade, categoria } = req.body;
        const [result] = await AdicionarProduto(nome, preco, quantidade, categoria);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleRemoverProduto = async (req, res) => { 
    try {
        const { id } = req.body;
        const [result] = await RemoverProduto(id);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleAtualizarProduto = async (req, res) => { 
    try {
        const { idproduto, nome, preco, quantidade, categoria } = req.body;
        const [result] = await AtualizarProduto(idproduto, nome, preco, quantidade, categoria);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const PedidoProduto = async (req, res) => { 
    try {
        const { id, id_produto, quantidade } = req.body;
        const [result] = await CriarPedido(id, id_produto, quantidade);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const MostrarCarrinho = async (req, res) => { 
    try {
        const { id } = req.body;
        const [result] = await MostarCarrinho(id);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};
const todosDados = {
    Void,
    EnviarProdutos,
    ControleNovoUsuario,
    MostrarUsuario,
    ControleAdicionarProduto,
    ControleRemoverProduto,
    ControleAtualizarProduto,
    PedidoProduto,
    MostrarCarrinho
}
module.exports = todosDados 

