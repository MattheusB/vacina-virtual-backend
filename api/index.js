const hospital = require('./hospital')
const cartao = require('./cartao-vacina')
const vacina = require('./vacina')

const express = require('express');
const router = new express.Router();


router.use('/hospital',hospital)
router.use('/cartao',cartao)
router.use('/vacina',vacina)

module.exports = router;