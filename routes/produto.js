const express = require('express')

var router = express.Router();

var controller = require('../controllers/produto')

const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()} - Body: ${JSON.stringify(req.body)}`);
    next();
}

const sessionAuth = (req, res, next) => {
    
    if (req.session.logado) {
        next(); 
    }
    else {
        res.status(401).send('Não autorizado');
    }   
}

router.use(requestLogger)
router.use(sessionAuth)


router.post('/',  controller.incluir)
router.get('/', controller.listar)
router.get('/:codigo', controller.buscar)
router.put('/:codigo', controller.alterar)
router.delete('/:codigo', controller.excluir)

module.exports = router