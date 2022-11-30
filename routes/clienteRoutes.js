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
router.get('/cliente/:id?', async (req, res) => {
    const id = req.params.id
    let resultado = {}
    if(id)
        resultado = {_id: id}

    try {
        const cliente = await Cliente.find(resultado)
        if(cliente)
            res.status(200).json(cliente)
        else
            res.status(404).json({message: 'Cliente Não Encontrado'})

    } catch (error) {
        res.status(500).json({error: error})
        
    }
})




module.exports = router