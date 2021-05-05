const Produtos = require('../models/produtos')

module.exports = {
    async list(req, res){
        const { id } = req.body
        try{
            const produtos = await Produtos.findOne({ 
                where: { 
                    id: id
                }
            })
            if(produtos == null){
                return res.json({error: "Produto não localizado"})
            }else{
                return res.json(produtos)
            }
        }catch(error){
            return console.error(error)
        }
    },
    async create(req, res) {
        const { name, price, custo } = req.body
        try{
            const result = await Produtos.create({ name, price, custo })
            return res.json(result)            
        }catch(error){
            return console.error(error)
        }
    }
    //Função de edidar posterior
}