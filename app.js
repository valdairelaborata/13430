const express = require('express')
const cors = require('cors');

const app = express()

// app.use(cors()); 

const connectDB = require('./config/database')

var routeProduto = require('./routes/produto')
var routeSession = require('./routes/session')

const session = require('express-session')

var swaggerUI = require('swagger-ui-express')
var swaggerFile = require('./swagger_output.json')

connectDB();

app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
      }))

app.use(express.json())

app.use('/produtos', routeProduto)
app.use('/session', routeSession)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(express.static('public'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});