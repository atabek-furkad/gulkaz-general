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
  console.log(req.body)
  if (
    req.body.name &&
    req.body.description &&
    req.body.countInStock &&
    req.body.category &&
    req.body.price
  ) {
    const product = new Product({
      user: req.user._id,
      name: req.body.name,
      description: req.body.description,
      image: '/images/imageReplacer.jpg',
      countInStock: req.body.countInStock,
      category: req.body.category,
      price: req.body.price,
    })
    console.log('good')
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } else {
    console.log('bad')
    res.status(400)
    throw new Error('Form is not completed')
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, countInStock, category, price } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.description = description
    product.image = '/images/imageReplacer.jpg'
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

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
