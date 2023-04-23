const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Testando GET.'
    })
});

router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'Testando POST.',
        produtoCriado: produto
    })    
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce informou o ID especial.',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID.'
        });
    }
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Testando PATCH.'
    })    
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Testando DELETE.'
    })    
});

module.exports = router;