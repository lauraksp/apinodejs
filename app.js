const express = require('express');
const app = express(); // instancia do express

const rotaProdutos = require('./routes/produtos'); // define variavel c diretorio de rota
const rotaPedidos = require('./routes/pedidos'); // define variavel c diretorio de rota


app.use('/produtos', rotaProdutos); // chama a rota produtos
app.use('/pedidos', rotaPedidos); // chama a rota produtos

module.exports = app; // exporta app 

