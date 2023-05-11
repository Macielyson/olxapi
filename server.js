require('dotenv').config();// carregando a variaveis de ambiente
const express = require('express');
const mongosse = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

// antes de criar o servidor fazer a conexao com o banco de dados.
mongosse.connect(process.env.DATABASE);
mongosse.Promise = global.Promise;
mongosse.connection.on('Error: ', (error) => {
    console.log("Error:", error.menssage)
});

// agora criando o servidor.
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(__dirname + '/public'));

// e aqui ficaram as rotas (ping para teste)
server.get('/ping', (req, res) => {
    res.json({ pong: true });
});

// despois list a porta
server.listen(process.env.PORT, () => {
    console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
