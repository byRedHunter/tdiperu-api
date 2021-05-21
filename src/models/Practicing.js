const mongoose = require('mongoose')

const PracticingSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	area: {
		type: String,
		required: true,
		trim: true,
	},
	message: {
		type: String,
		required: true,
		trim: true,
	},
	linkFile: {
		type: String,
		required: true,
		trim: true,
	},
	registered: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('Practicing', PracticingSchema)
