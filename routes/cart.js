const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log('rota cart principal')
    res.end('rota cart principal')
})

module.exports = router
