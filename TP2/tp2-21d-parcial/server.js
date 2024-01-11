import express from 'express'
import {RouterNumeros} from './router/numeros.js'
import config from './config.js'
import {CnxMongoDB} from './model/DB.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/numeros', new RouterNumeros().start())

if(config.MODO_PERSISTENCIA == 'MONGO'){
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))