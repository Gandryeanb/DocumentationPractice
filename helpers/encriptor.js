const bcrypt = require('bcrypt')

const encriptor = (pass) => {

    var hash = bcrypt.hashSync(pass, Number(process.env.SECRETROUNDS))

    return hash
} 

module.exports = encriptor