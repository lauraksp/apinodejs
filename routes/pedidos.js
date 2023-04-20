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
        mensagem: 'Pedido'
    })    
});


// retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Esse e o id especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
});

// deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    })    
});

module.exports = router; // exporta o modulo router com os verbos