const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

// description  fetch all products
// route        GET ~/products
// access       public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  }),
)

// description  fetch single products
// route        GET ~/products/:id
// access       public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    console.log('am I running', product)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  }),
)

module.exports = router
