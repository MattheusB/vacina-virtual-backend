const hospital = require('../../api/hospital')
const cartao = require('../../api/cartao-vacina')
const vacina = require('../../api/vacina')

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
      title: 'Vacina Virtual',
      version: '1.0.0'
    });
});

router.use('/hospital',hospital)
router.use('/cartao',cartao)
router.use('/vacina',vacina)

module.exports = router;