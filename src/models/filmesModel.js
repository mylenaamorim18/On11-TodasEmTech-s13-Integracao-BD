const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema({ 

    nome: {
        type: String,
        required: true
    },

    ano: {
        type: Number,
        required: true
    },

    autor: {
        type: String,
        required: true
    },

    genero: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('filmesModel', livroSchema)