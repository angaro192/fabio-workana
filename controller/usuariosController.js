const { create } = require('../models/usuario')
const Usuario = require('../models/usuario')

module.exports = {
    async list(req, res){
        const { usuario, senha} = req.body
        try{
            const usuarios = await Usuario.findOne({ 
                where: { 
                    usuario: usuario,
                    senha: senha
                }
            })
            if(usuarios == null){
                return res.json({error: "Usuario ou senha invalidas"})
            }else{
                return res.json(usuarios)
            }
        }catch(error){
            return console.error(error)
        }
    },
    async create(req, res) {
        const { usuario, senha, ck, cs } = req.body
        try{
            const usuarios = await Usuario.findOne({ where: { usuario: usuario } })
            if(usuarios == null){
                const result = await Usuario.create({usuario, senha, ck, cs})
                return res.json(result)
            }else{
                return res.json({error: "Usuario já existe"})
            }
            
        }catch(error){
            return console.error(error)
        }
    }
}