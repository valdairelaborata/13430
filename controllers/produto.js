
const Produto = require('../models/produto')

exports.buscar = async (req, res) =>{

    res.send('Retornar o produto!')
}

exports.incluir = async (req, res) =>{

    try {
        
        const { codigo, nome } = req.body

        const produto = new Produto({
            codigo,
            nome
        });

        await produto.save();

        
    } catch (error) {
        console.error(error)
        res.status(400).send('Erro ao incluir o produto!')
    }
  
    

    res.send('Incluir o produto...')

}

