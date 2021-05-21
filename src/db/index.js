const mongoose = require('mongoose')

const connection = process.env.MONGO_URI

mongoose.set('useCreateIndex', true)

const conectionDB = async () => {
	try {
		await mongoose.connect(
			connection,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			},
			() => {
				console.log('DB connected')
			}
		)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = conectionDB
