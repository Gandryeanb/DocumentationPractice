const routes = require('express').Router()
const routesUser = require('./user')

routes.use('/users',routesUser)

routes.get('/',(req,res) => {
    res.status(200).json({
        message : `it's On!`
    })
})


module.exports = routes