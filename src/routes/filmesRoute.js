const express = require('express')
const router = express.Router()

const controller = require('../controllers/filmesController')

//Create/Criar -> Post
router.post('/', controller.criar)

//Read/Ler -> Get
router.get('/', controller.listarFilme)

//Read/Ler -> Get
router.get('/:id', controller.listarTodos)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizar)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletar)

module.exports = router