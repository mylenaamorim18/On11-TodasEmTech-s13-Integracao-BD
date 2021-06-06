const Filme = require('../models/filmesModel')

const criar = async (req, res)=> {

    const filme = new Filme({
        nome: req.body.nome,
        ano: req.body.ano,
        autor: req.body.autor,
        genero: req.body.genero
    })
    
    try {
        const novoFilme = await filme.save()
        res.status(201).json(novoFilme)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const listarTodos = async (req, res)=> {
    const filmes = await Filme.find()
    res.status(200).json(filmes)
}

const atualizar = async (req, res)=> {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'filme não encontrado!'})
        }

        if (req.body.nome != null) {
            filme.nome = req.body.nome
        }

        if (req.body.ano != null) {
            filme.ano = req.body.ano
        }

        if (req.body.autor != null) {
            filme.autor = req.body.autor
        }

        if (req.body.genero != null) {
            filme.genero = req.body.genero
        }

        const filmeAtualizado = await filme.save()
        res.json(filmeAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletar = async (req, res)=>{
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
        }
    
        await filme.remove()
        res.json({ message: 'filme deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const listarFilme = async (req, res ) => {
    const filme = await Filme.findById(req.params.id)

    if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
    }

    res.json(filme)
}

module.exports = { 
    criar,
    listarFilme,
    listarTodos,
    deletar,
    atualizar
}