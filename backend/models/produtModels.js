import mongoose, { mongo } from  'mongoose'

const productSchema = mongoose.Schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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

const User = mongoose.model('product',productSchema)

export default User