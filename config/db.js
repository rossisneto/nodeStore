const mongoose = require('mongoose')
const {MONGO_URI} = process.env

exports.connect = ()=>{
    //Conexão com o banco
    mongoose
        .connect(MONGO_URI,{
            useNewUrlParser: true
        })
        .then(()=>{
            console.log('Conectado ao Mong0DB')
        })
        .catch((err)=>{
            console.log("Falha na conexão com o MongoDB")
        })
}