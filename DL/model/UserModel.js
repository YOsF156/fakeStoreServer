const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        select: false
    },
    isActive: {
        type: Boolean,
        default: true,

    }
})

const User = mongoose.model("user", UserSchema)


module.exports = User
