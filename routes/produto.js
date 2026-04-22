const express = require('express')

var router = express.Router();

var controller = require('../controllers/produto')

router.get('/', controller.buscar)
router.post('/', controller.incluir)

module.exports = router