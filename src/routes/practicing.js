const express = require('express')
const { check } = require('express-validator')

const { createPracticing } = require('../controllers/practicingController')
const { multerPdf } = require('../utils/multer')

const router = express.Router()

// api/practicing

// crear nuevo practicante
router.post('/', multerPdf.single('linkFile'), createPracticing)

module.exports = router
