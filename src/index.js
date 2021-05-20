require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
	res.status(200).send('Comenzamos api')
})

app.listen(process.env.PORT, () => {
	console.log(`Server runing on http://localhost:${process.env.PORT}`)
})
