
const Produto = require('../models/produto')

exports.incluir = async (req, res) =>{

    try {
        
        const { codigo, nome } = req.body

        if(!codigo || !nome){
            return res.status(400).send('Código e nome são obrigatórios!')
        }   

        const produto = new Produto({
            codigo,
            nome
        });

        await produto.save();

        res.status(201).send({
            mensagem: 'Produto incluído com sucesso!',
            produto
        });
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro ao incluir o produto!')
    }
}

exports.listar = async (req, res) =>{   

    try {
        const produtos = await Produto.find();
        res.json(produtos);

    } catch (error) {
        console.error(error); 
        res.status(500).send('Erro ao listar os produtos!');  
    }

}

exports.buscar = async (req, res) =>{

    try {

        const { codigo } = req.params;
        const produto = await Produto.findOne({ codigo });

        if (!produto) {
            return res.status(404).send('Produto não encontrado!');
        }

        res.status(200).send({
            mensagem: 'Produto encontrado com sucesso!',
            produto
        });

    }
    catch (error) { 
        console.error(error);
        res.status(500).send('Erro ao buscar o produto!');
    }    
}

exports.alterar = async (req, res) =>{
 
    try {
        const { codigo } = req.params;
        const { nome } = req.body;

        if (!codigo || !nome    ) {
            return res.status(400).send('Nome e código são obrigatórios!');
        }

        const produto = await Produto.findOneAndUpdate({ codigo }, { nome }, { new: true });

        res.status(201).send({
            mensagem: 'Produto alterado com sucesso!',
            produto
        });

    } catch (error) {
        console.error(error)
        res.status(500).send('Erro ao alterar o produto!')
    }

}

exports.excluir = async (req, res) =>{  

    try {
        const { codigo } = req.params;
        await Produto.findOneAndDelete({ codigo });
        res.status(200).send({
            mensagem: 'Produto excluído com sucesso!'
        });
    } catch (error) {
        console.error(error)
        res.status(400).send('Erro ao excluir o produto!')  
    }
}