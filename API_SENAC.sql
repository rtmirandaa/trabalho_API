create database api_rest;

use api_rest;
create table clientes (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade int NOT NULL);
select * from api_rest.clientes;


create table produtos (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    quantidade int NOT NULL
)


insert INTO api_rest.produtos (nome, quantidade) VALUES ("teclado", 2000)

select * from produtos;

UPDATE produtos SET nome = 'teclado atualizado', quantidade = 2500 WHERE id = 1;

show DATABASES;
select * from produtos;