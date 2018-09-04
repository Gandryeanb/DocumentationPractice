const routes = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

routes.get('/', ControllerUser.findAll)
routes.post('/', ControllerUser.insert)

module.exports = routes