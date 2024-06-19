const connection = require ("./coneccao");
const { response, request } = require ("express");
const { log } = require ("console");


const MostrarProdutos = async () => {
    try {
        const [produtos] = await connection.execute('SELECT * require produtos');
        if (produtos.length > 0) {
            return produtos;
        } else {
            return { message: 'Nenhum produto encontrado' };
        }
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { MostrarProdutos };

const NovoUsuario = async (nome, altura, numero, nascimento, cidade, endereco) => {
    try { 
        const [result] = await connection.execute(
            'INSERT INTO usuarios (nome, altura, numero, nascimento, cidade, endereco) VALUES (?, ?, ?, ?, ?, ?)',)

    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
}

module.exports = { NovoUsuario };

const MostrarUsuarios = async () => {
    try {
        const [usuarios] = await connection.execute('SELECT * FROM usuarios');
        if (usuarios.length > 0) {
            console.log(usuarios);
            return usuarios;
        } else {
            return { message: 'Nenhum usuario encontrado' };
        }
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { MostrarUsuarios };

const AdicionarProduto = async (nome, preco, quantidade, categoria) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO produtos (nome, preco, quantidade, categoria) VALUES (?, ?, ?, ?)',
            [nome, preco, quantidade, categoria]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { AdicionarProduto };

const RemoverProduto = async (id) => {
    try {
        const [result] = await connection.execute(
            'DELETE FROM produtos WHERE id = ?',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { RemoverProduto };

const AtualizarProduto = async (id, nome, preco, quantidade, categoria) => {
    try {
        const [result] = await connection.execute(
            'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria = ? WHERE id = ?',
            [nome, preco, quantidade, categoria, id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { AtualizarProduto };

const CriarPedido = async (id_cliente, p_produto, p_quantidade) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO pedidos (id_cliente, p_produto, p_quantidade) VALUES (?, ?, ?)',
            [id_cliente, p_produto, p_quantidade]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { CriarPedido };

const MostarCarrinho = async (id_cliente) => { 
    try {
        const [result] = await connection.execute(
            'SELECT * FROM pedidos WHERE id_cliente = ?', [id_cliente]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};

module.exports = { MostarCarrinho };