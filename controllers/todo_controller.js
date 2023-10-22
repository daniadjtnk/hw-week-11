const {Todo} = require('../models')

class TodoController{
    static async getAll(req, res, next){
        try{
            const data = await Todo.findAll({where: {status: 'active'}})
            
            if(!data){
                throw {name: 'NotFound'}
            }else {
                res.status(200).json(data)
            }
        }catch(err) {
            next(err)

        }
    }

    static async getOne(req, res, next){
        const {id} = req.params
        try{
            const data = await Todo.findOne({where: {id}})
            res.status(200).json(data)
        }catch(err) {
            next(err)
        }
    }

    static async create(req, res, next){
        const {title, status} = req.body
        try{
            const data = await Todo.create({title, status})
            res.status(200).json(data)
        }catch(err) {
            next(err)
        }
    }

    static async update(req, res, next){
        const {id} = req.params
        const {title, status} = req.body
        try{
            const data = await Todo.update({title, status}, {where: {id}})
            res.status(200).json(data)
        }catch(err) {
            next(err)  
        }
    }

    static async delete(req, res, next){
        const {id} = req.params
        try{
            await Todo.update({status: 'inactive'}, {where: {id}})
            res.status(200).json({message: "Title deleted successfully"})
        }catch(err) {
            next(err)  
            
        }
    }
}

module.exports = TodoController;