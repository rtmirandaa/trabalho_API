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

        const {nome, altura, nascimento, cidade} = await req.body;
        console.log(nome, altura, nascimento, cidade);

        return res.status(200).json({message : 'Cliente criado com sucesso!'});

    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

const MostrarUsuario = async (req, res) => {
    try {
        const result = await querys.MostrarUsuariosquery();
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
        const preco = parseFloat (req.body.preco);
        const quantidade = parseInt (req.body.quantidade);
        const categoria =parseInt( req.body.categoria);
        const idproduto = parseInt(req.params.id); 
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
    MostrarUsuario,
    ControleNovoUsuario,
    ControleAtualizarProduto
} 

