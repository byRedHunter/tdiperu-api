require('dotenv').config()

const express = require('express')
const cors = require('cors')

const conectionDB = require('./db')

// inicializamos la app
const app = express()

// llamamos a la conexion
conectionDB()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// rutas
app.get('/', (req, res) => {
	res.status(200).send('Comenzamos api')
})

// lanzamos el servidor
app.listen(process.env.PORT, () => {
	console.log(`Server runing on http://localhost:${process.env.PORT}`)
})
