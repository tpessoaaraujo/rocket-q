// Importações
const express = require('express')

// Habilitando as rotas do express na variável 'route'
const route = express.Router()

// Configuração das rotas
route.get('/', (req, res) => res.render('index'))
route.get('/create-pass', (req, res) => res.render('create-pass'))
route.get('/room', (req, res) => res.render('room'))

// Exportando as rotas
module.exports = route