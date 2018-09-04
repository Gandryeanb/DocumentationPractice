const User = require('../models/user')
const encriptor = require('../helpers/encriptor')

class ControllerUser {

    static insert(req,res) {
        
        let obj = {
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            username  : req.body.username,
            password  : encriptor(req.body.password),
            email     : req.body.email  
        }

        let user = new User(obj)

        user.save(err => {
            if (!err) {
                res.status(201).json({
                    message : 'inserting data user success',
                    userData : user
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        })
    }

}

module.exports = ControllerUser