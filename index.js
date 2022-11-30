const express = require('express')
const conn = require('./db/conn')
const app = express()
app.use(express.urlencoded())
app.use(express.json())

const clienteRoutes = require('./routes/clienteRoutes')
app.use(clienteRoutes)

const port = 3000
conn()
    .then(() => app.listen(port, () => {
        console.info('app running on: ', `http://localhost:${port}`)
    }))
    .catch(() => process.exit())
