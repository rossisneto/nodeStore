const express = require('express')
const app= express()

//Carregando .ENV
require('dotenv').config()

//habilitando JSON
app.use(express.json())

//Importando conexão BD
require('./config/db').connect()


app.get('/',(req,res)=>{
    res.end('Rota inicial')
})


app.listen(process.env.PORT, ()=>console.log("Servidor iniciado na porta "+process.env.PORT))