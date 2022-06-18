const express = require('express')
const app= express()

//Carregando .ENV
require('dotenv').config()

//Importando conexão BD
require('./config/db').connect()

//Habilitando JSON
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

//Acesso pasta public
app.use(express.static('public'))

//View engine
app.set('view engine', 'ejs')

//Configuração das rotas
const indexRouter = require('./routes/index')
const cartRouter = require('./routes/cart')

//Habilitação das Rotas
app.use('/',indexRouter)
app.use('/cart',cartRouter)

//Incializando o servidor
app.listen(process.env.PORT, ()=>console.log("Servidor iniciado na porta "+process.env.PORT))