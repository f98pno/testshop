import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requied: true,
        },
        email: {
            type: String,
            requied: true,
            unique: true,
        },
        password: {
            type: String,
            requied: true,
        },
        isAdmin: {
            type: String,
            requied: true,
            default: false,
        },
    },
    {
        timestapns: true,
    }
)

const User = mongoose.model('User', userSchema)

export default User
