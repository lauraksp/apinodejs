const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos.'
    })
});

router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'Cria um pedido.',
        pedidoCriado: pedido
    })    
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce passou o ID especial do pedido.',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID.'
        });
    }
});

router.delete('/', (req, res, next) => {
    res(201).send({
        mensagem: 'Pedido excluido.'
    })    
});

module.exports = router;