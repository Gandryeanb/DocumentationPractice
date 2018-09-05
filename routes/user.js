const routes = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

routes.get('/', ControllerUser.findAll)
routes.post('/', ControllerUser.insert)
routes.put('/:id', ControllerUser.updateOne)
routes.delete('/:id', ControllerUser.removeOne)

module.exports = routes