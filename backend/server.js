import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db'
import products from './products'


dotenv.config()
connectDb()

const app = express()
app,get('/', (req,res) => {
  res.send('Apio runnning !!')
})

app.get('/api/products',(req,res) => {
  res.json(products)
})

app.get('/api/products/:id',(req,res) => {
  const product = product.find((p) => p.id === req.params.id)
  res.json(product)
})