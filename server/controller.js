const { where } = require('sequelize');
const {Todo} = require('./model')

class Controller {
 
    async create(req, res) {
        try {
            const {content} = req.body
            const post = await Todo.create({content})
            res.json(post)
        } catch (e) {
            console.log(e)
        } 
    }

    async getAll(req, res) {
        try {
            const posts = await Todo.findAll()
            return res.json(posts)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const post = await Todo.findOne({
                where: {
                    id: id
                }
            })
            return res.json(post)
        } catch (e) {
            console.log(e)
        }
    } 

    async update(req, res) {
        try {
            const {id} = req.params
            const {newContent} = req.body
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedPost = await Todo.findOne({
                where: {
                    id: id
                }
            })
            updatedPost.content = newContent
            await updatedPost.save();
            return res.json(updatedPost)
            
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params

            const deletePost = await Todo.destroy({
                where: {
                    id: id
                }
            })
            res.json(`Задача ${deletePost.content} была удалена`)
        } catch (e) {
            console.log(e)
        }
    }

    async toggleCheck(req, res) {
        try {
            const {id} = req.params

            const updatedPost = await Todo.findOne({
                where: {
                    id: id
                } 
            })
             updatedPost.completed = !updatedPost.completed

             await updatedPost.save();
            return res.json(updatedPost.completed)
        } catch (e) {
            console.log(e)
        }
    }

   
} 

module.exports = new Controller()