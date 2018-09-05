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

    static findAll(req, res) {
        User.find((err, users) => {
            if (!err) {
                res.status(200).json({
                    usersData : users
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        })
    }

    static updateOne(req, res) {

        User.updateOne({ _id: req.params.id }, req.body, (err, result) => {
            if (!err) {
                res.status(200).json({
                    message : 'updating success',
                    user : result
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        });
  
    }

    static removeOne(req, res) {

        User.deleteOne({ _id: req.params.id },(err) => {
            if (!err) {
                res.status(200).json({
                    message : 'deleting success'
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        });
  
    }

}

module.exports = ControllerUser