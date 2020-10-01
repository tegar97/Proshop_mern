import mongoose from 'mongoose'

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`connected to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error ${error.message}`.red.underline.bold)
    }
}

export default connectDB;