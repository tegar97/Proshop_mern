import express from 'express'
import Product from '../models/produtModels.js';
import asyncHandler from 'express-async-handler'


//@desc Fetch All Products
//@route GET /api/products
//@access Public 
export const getAllProducts = asyncHandler(async (req,res) => {
    const products = await Product.find({})
    res.status(200).json(products)
})


//@desc Fetch single Product
//@route GET /api/products/:id
//@access Public 
export const getProducts =  asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.status(200).json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})
