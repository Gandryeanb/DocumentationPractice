const routes = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

routes.post('/', ControllerUser.insert)

module.exports = routes