const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type : String,
        required : [true, 'You need to fill your first name!']
    },
    lastName: String,
    username: String,
    password: String,
    email: String,
    balance: {
        type : Number,
        default : 0
    },
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User