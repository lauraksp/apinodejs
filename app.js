const express = require('express');
const app = express(); // instancia do express

app.use((req, res, next) => { // requisicao, resposta, chamar outro metodo; arrow function
    res.status(200).send({
        mensagem: 'Deu certo' // objeto de retorno
    }) // status code http

});

module.exports = app; // exporta app 

