const Router = require('express')
const Controller = require('./controller')
const router = new Router

router.post('/posts', Controller.create)
router.get('/posts', Controller.getAll)
router.get('/posts/:id', Controller.getOne)
router.put('/posts/:id', Controller.update)
router.put('/posts/check/:id', Controller.toggleCheck)
router.delete('/posts/:id', Controller.delete)

module.exports = router

 