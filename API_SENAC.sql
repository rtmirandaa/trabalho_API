create database api_rest;

use api_rest;
create table clientes (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade int NOT NULL);
select * from api_rest.clientes;

show DATABASES;
select * from produtos;