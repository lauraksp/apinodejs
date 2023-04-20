const express = require('express');
const router = express.Router();


// retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
});

// cria pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido criado'
    })    
});


// retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido  
    res.status(200).send({
        mensagem: 'Voce passou um ID',
        id_pedido: id
    });
});

// delete um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilizando o DELETE dentro da rota de pedido'
    })    
});

module.exports = router; // exporta o modulo router com os verbos