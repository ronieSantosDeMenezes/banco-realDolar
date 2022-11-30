const mongoose = require('mongoose')
const url = 'mongodb+srv://bancoReal:caiojulia123@bancorealdolarcluster1.er28dpp.mongodb.net/?retryWrites=true&w=majority'
const conn = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
        .then(() => {
            console.info("DB Connected!!!!")
            resolve()
        })
        .catch(() => reject())
    })
}

module.exports = conn