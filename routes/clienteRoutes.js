const router = require('express').Router()
const Cliente = require('../models/Cliente')

router.post('/cliente', async (req, res) => {
    const {nomeCliente, rgCliente,  cpfCliente, depositIncial, cadastPositivo} = req.body

    const cliente = {
        nomeCliente,
        rgCliente,
        cpfCliente,
        depositIncial,
        cadastPositivo
        
        
    }
     try {
        const result = await Cliente.create(cliente)
        if(result?._id)
            res.status(201).json({message: 'Cliente Cadastrado com Sucesso!!!!'})
     res.status(500).send()
     } catch (error) {
        res.status.apply(500).json({error: error})
        
     }
})
module.exports = router