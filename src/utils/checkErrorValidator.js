const { validationResult } = require('express-validator')

exports.checkErrorValidator = (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() })
	}
}
