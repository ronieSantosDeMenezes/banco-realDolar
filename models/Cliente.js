const mongoose = require('mongoose')

const Cliente = mongoose.model('Cliente', {
    nomeCliente: String,
    rgCliente:String,
    cpfCliente: String,
    depositIncial: Number,
    cadastPositivo: Boolean


})

module.exports = Cliente