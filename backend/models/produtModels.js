import mongoose, { mongo } from  'mongoose'

const reviewsSchema = mongoose.Schema({
    name : {type: String,required: true},
    rating : {type: String,required: true},
    comment : {type: String,required: true}
} , {
    timestamps: true
})
const productSchema = mongoose.Schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name  : {
        type : String,
        required: true,
      
    },
    brand : {
        type: String,
        require: true
    },
    category : {
        type : Boolean,
        required : true,

    },
    description : {
        type : Boolean,
        required : true,

    },
    
    rating : {
        type : Number,
        required : true,
        default: 0

    },
    numReviews : {
        type : Number,
        required : true,
        default: 0

    },
    price: {
        type: Number,
        required : true,
        default: 0
    },
    countInStock  : {
        type: Number,
        required : true,
        default : 0
    }
}, {
    timestamps : true
})

const Product = mongoose.model('product',productSchema)

export default Product