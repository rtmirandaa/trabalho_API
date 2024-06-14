const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'API_REST'
});

const MostrarProdutos = async () => {
    try {
        const [produtos] = await connection.execute('SELECT * FROM produtos');
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


MostrarProdutos().then(result => {
    console.log('Resultado:', result); 
}).catch(error => {
    console.error('Erro na execução da função:', error);
});

module.exports = { connection, MostrarProdutos };
