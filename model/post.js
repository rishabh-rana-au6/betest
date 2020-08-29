import mongoose from 'mongoose'

const schema = mongoose.Schema

const postSchema = new schema ({
    
    Title : {
        type : String,
        unique : true,
        required : true
    },

    Description : {
        type : String,
        required : true
    },
    Author : {
        type : String
    },
    DateTime: {
        type : Date
    },
    User : {
        type : schema.Types.ObjectId,
        ref : 'User'
    },
    Comments : [],

    Likes : {
        type: Number,
        default : 0
    }
})

const Posts = mongoose.model('Posts', postSchema)

export  default Posts