const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();

const rotaProdutos = require('./routes/produtos'); 
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false})); // apenas dados simples
app.use(bodyparser.json()); // entrada no body somente json

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*'); // liberado p acessar de qqr servidor 
    res.header( // propriedades de cabeçalhos aceitos
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'        
    );

    if(req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUTH, PATCH, DELETE');
        return res.status(200).send({});

    }
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((req, res,next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;

