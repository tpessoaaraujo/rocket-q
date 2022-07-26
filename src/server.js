// Importações
const express = require('express')
const route = require('./route')
const path = require('path')

// Habilitando o express na variável 'server'
const server = express()

// Configuração do server
server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log("Rodando na porta 'localhost:3000'..."))