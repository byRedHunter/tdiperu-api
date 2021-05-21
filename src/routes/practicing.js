const express = require('express')
const { check } = require('express-validator')

const { createPracticing } = require('../controllers/practicingController')

const router = express.Router()

// api/practicing

// crear nuevo practicante
router.post(
	'/',
	[
		check('name', 'Campo nombre obligatorio.').not().isEmpty(),
		check('email', 'Ingrese un email valido.').isEmail(),
		check('area', 'Campo area obligatorio.').not().isEmpty(),
		check('message', 'Campo mensaje obligatorio.').not().isEmpty(),
		check('linkFile', 'Archivo obligatorio.').not().isEmpty(),
	],
	createPracticing
)

module.exports = router
