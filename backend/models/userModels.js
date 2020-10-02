import mongoose from  'mongoose'

const userSchema = mongoose.Schema({
    name : {
        type : String ,
        required: true
    },
    email  : {
        type : String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        require: true
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false
    }
})

const User = mongoose.model('user',userSchema)

export default User