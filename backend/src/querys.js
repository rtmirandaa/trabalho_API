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


const NovoUsuario = async (nome, altura, nascimento, cidade) => {
    try { 
        const [result] = await connection.execute(
            'INSERT INTO clientes (nome, altura, nascimento, cidade) VALUES (?, ?, ?, ?)',[nome, altura, nascimento, cidade])

    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
}


const MostrarUsuariosquery = async () => {
    try {
        const [usuarios] = await connection.execute('SELECT * FROM clientes');
        if (usuarios.length > 0) {
            return usuarios;
        } else {
            return { message: 'Nenhum usuario encontrado' };
        }
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};


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


const AtualizarProduto = async (id, nome, preco, quantidade, categoria) => {
    try {
        console.log(id, nome, preco, quantidade, categoria);
        const [result] = await connection.execute(
            'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?',
            [nome, preco, quantidade, categoria, id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao receber os dados:', error);
        return { message: 'Erro ao receber os dados' };
    }
};


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

module.exports = {
    MostrarProdutos,
    NovoUsuario,
    MostrarUsuariosquery,
    AdicionarProduto,
    RemoverProduto,
    AtualizarProduto,
    CriarPedido,
    MostarCarrinho
}