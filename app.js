const express = require('express');
const app = express(); // instancia do express

const rotaProdutos = require('./routes/produtos'); // define variavel c diretorio de rota

app.use('/produtos', rotaProdutos); // chama a rota produtos

module.exports = app; // exporta app 

