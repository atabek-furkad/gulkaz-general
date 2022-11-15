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
    user: req.user._id,
    name: 'sample name',
    description: 'sample desc',
    image: '/images/imageReplacer.jpg',
    countInStock: 1,
    category: 'sample category',
    price: 100,
  })

  const savedProduct = await product.save()

  res.status(201).json(savedProduct)
})

const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, image, countInStock, category, price } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.description = description
    product.image = image
    product.countInStock = countInStock
    product.category = category
    product.price = price
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = { getProducts, getProduct, addProduct, updateProduct }
