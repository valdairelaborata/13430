const express = require('express')

const jwt = require('jsonwebtoken')


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

const jwtAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log('Token recebido:', token); // Log do token recebido

        try {
            const user = jwt.verify(token, 'secreto');
            req.user = user;
            next(); 
        } catch (error) {
            return res.status(403).send('Token inválido');
        }
    }
    else {
        console.log('Nenhum token encontrado no cabeçalho Authorization');
        res.status(401).send('Não autorizado');
    }
}

router.use(requestLogger)
// router.use(sessionAuth)
router.use(jwtAuth)


router.post('/',  controller.incluir)
router.get('/', controller.listar)
router.get('/:codigo', controller.buscar)
router.put('/:codigo', controller.alterar)
router.delete('/:codigo', controller.excluir)

module.exports = router