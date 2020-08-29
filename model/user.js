import mongoose from 'mongoose'

const schema = mongoose.Schema

const userSchema = new schema ({
    
    userName : {
        type : String,
        unique : true,
        required : true
    },

    password : {
        type : String||Number,
        required : true
    }
})

const User = mongoose.model('User', userSchema)

export  default User