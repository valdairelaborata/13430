const express = require('express')

const app = express()

var routeProduto = require('./routes/produto')

var swaggerUI = require('swagger-ui-express')
var swaggerFile = require('./swagger_output.json')


// app.get('/pedidos', (req, res) =>{
//     res.send('Aqui a rota para consular pedidos!')
// })

// app.get('/produtos', (req, res) =>{
//     res.send('Aqui a rota para consular produto!')
// })

// app.post('/produtos', (req, res) =>{
//     res.send('Aqui a rota para criar produto!')
// })

// app.put('/produtos', (req, res) =>{
//     res.send('Aqui a rota para alterar produto!')
// })

// app.delete('/produtos', (req, res) =>{
//     res.send('Aqui a rota para excluir produto!')
// })

app.use('/produtos', routeProduto)


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('Servidor express ok!')
})
