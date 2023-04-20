const express = require('express');
const router = express.Router();


// retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET na rota produtos'
    })
});

// cria produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Criando o POST dentro da rota de produtos'
    })    
});


// retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
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

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilizando o PATCH dentro da rota de produtos'
    })    
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Utilizando o DELETE dentro da rota de produtos'
    })    
});

module.exports = router; // exporta o modulo router com os verbos
