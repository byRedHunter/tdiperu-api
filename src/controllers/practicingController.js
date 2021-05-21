const { checkErrorValidator } = require('../utils/checkErrorValidator')

const Practicing = require('../models/Practicing')

exports.createPracticing = async (req, res) => {
	checkErrorValidator(req, res)

	try {
		// creamos un nuevo practicante
		const practicing = new Practicing(req.body)

		// registramos al practicante
		practicing.save()

		res.status(200).json(practicing)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ errors: 'Error en el servidor' })
	}
}
