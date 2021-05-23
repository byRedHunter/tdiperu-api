require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const conectionDB = require('./db')

// inicializamos la app
const app = express()

// llamamos a la conexion
conectionDB()

// middleware
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// rutas
app.use('/api/practicing', require('./routes/practicing'))

// lanzamos el servidor
app.listen(process.env.PORT, () => {
	console.log(`Server runing on http://localhost:${process.env.PORT}`)
})
