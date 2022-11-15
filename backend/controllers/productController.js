const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const addProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: '/images/imageReplacer.jpg',
    countInStock: req.body.countInStock,
    category: req.body.category,
    price: req.body.price,
  })

  const savedProduct = await product.save()

  res.status(201).send(product)
})

module.exports = { getProducts, getProduct, addProduct }
