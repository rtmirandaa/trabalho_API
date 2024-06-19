const express = require('express');
const {Request, Response} = require ("express");
const querys = require ("./querys");
const { log } = require ("console");

const Void = async(req, res)=>{
    return res.status(200).json({Aviso: "Endpoint"})

}


const EnviarProdutos = async (req, res) => {
    try {
        const [result] = await querys.MostrarProdutos();
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleNovoUsuario = async (req, res) => {
    try {
        const nome =req.body.nome ;
        const altura = req.body.altura;
        const nascimento = req.body.nascimento;
        const cidade = req.body.cidade;
        console.log(nome, altura, nascimento, cidade);
        const [result] = await querys.NovoUsuario(nome, altura, nascimento, cidade);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const MostrarUsuario = async (req, res) => {
    try {
        const [result] = await querys.MostrarUsuariosquery();
        console.log('Resultado:', result);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};


const ControleAdicionarProduto = async (req, res) => { 
    try {
        const nome = req.body.nome;
        const preco = req.body.preco;
        const quantidade = req.body.quantidade;
        const categoria = req.body.categoria;
        const [result] = await querys.AdicionarProduto(nome, preco, quantidade, categoria);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleRemoverProduto = async (req, res) => { 
    try {
        const id  = req.body.id;
        const [result] = await querys.RemoverProduto(id);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const ControleAtualizarProduto = async (req, res) => { 
    try {
        const nome = req.body.nome;
        const preco = req.body.preco;
        const quantidade = req.body.quantidade;
        const categoria = req.body.categoria;
        const idproduto = req.body.idproduto;
        const [result] = await querys.AtualizarProduto(idproduto, nome, preco, quantidade, categoria);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const PedidoProduto = async (req, res) => { 
    try {
        const id = req.body.id;
        const id_produto = req.body.id_produto;
        const quantidade = req.body.quantidade;
        const [result] = await querys.CriarPedido(id, id_produto, quantidade);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const MostrarCarrinho = async (req, res) => { 
    try {
        const id  = req.body.id;
        const [result] = await querys.MostarCarrinho(id);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = {
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

