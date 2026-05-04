const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');    


router.post('/login', (req, res) => {
   // #swagger.tags = ['session']    
    const { usuario, senha } = req.body;

    req.session.usuario = usuario;
    req.session.logado = true;

    res.status(201).send(`Usuário ${usuario} logado com sucesso!`);
});

router.post('/login-jwt', (req, res) => {
    // #swagger.tags = ['session']
    const { usuario, senha } = req.body;
   
    if (usuario && senha) {
        // validar usário e senha no banco de dados (aqui é só um exemplo simples)
            
        const token = jwt.sign({ usuario }, 'secreto', { expiresIn: '1h' });


        res.status(200).send({ token });
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

router.get('/info', (req, res) => {
    // #swagger.tags = ['session']
    if (req.session.logado) {
        res.status(200).send({
            usuario: req.session.usuario,
            logado: req.session.logado,
            carro: req.session.carro || null
        });
    } else {
        res.status(401).send('Não autorizado');
    }
});

router.post('/car', (req, res) => {
// #swagger.tags = ['session']
    const { marca, modelo } = req.body;
    req.session.carro = { marca, modelo };

    res.status(201).send(`Carro ${marca} ${modelo} adicionado à sessão!`);
    
});

module.exports = router;
