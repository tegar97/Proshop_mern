import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'
import productRoutes from './route/productRoutes.js'
import {notFound ,errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()

const app = express()

app.use('/api/products/',productRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server runnning ${process.env.NODE_ENV} made on port ${PORT}`.yellow.bold))