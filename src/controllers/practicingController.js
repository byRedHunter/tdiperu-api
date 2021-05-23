const { checkErrorValidator } = require('../utils/checkErrorValidator')

const Practicing = require('../models/Practicing')
const cloudinary = require('../utils/cloudinary')

exports.createPracticing = async (req, res) => {
	//checkErrorValidator(req, res)

	try {
		const resultUpload = await cloudinary.uploader.upload(req.file.path)
		// creamos un nuevo practicante
		const { name, email, area, message } = req.body
		const practicing = new Practicing({
			name,
			email,
			area,
			message,
			linkFile: resultUpload.secure_url,
			cloudinaryId: resultUpload.public_id,
		})

		// registramos al practicante
		await practicing.save()

		res.status(200).json(practicing)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ errors: 'Error en el servidor' })
	}
}
