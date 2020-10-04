import express from 'express'
import Product from '../models/produtModels.js';
import asyncHandler from 'express-async-handler'
import { getProducts ,getAllProducts} from '../controller/productController.js';
const router = express.Router()

//@desc Fetch All Products
//@route GET /api/products
//@access Public 

router.route('/').get(getAllProducts)

//@desc Fetch single Product
//@route GET /api/products/:id
//@access Public 
router.get('/:id',getProducts)

export default router;