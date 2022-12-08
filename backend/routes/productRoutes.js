const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const Product = require('../models/productModel')
const { protect } = require('../middleware/authMiddleware')
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')
const upload = require('../controllers/uploadController')

// description  fetch all products
// route        GET ~/products
// access       public
router.get('/', getProducts)

// description  fetch single product
// route        GET ~/products/:id
// access       public
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

  // const image = product.images[0].fileName
  // console.log('image', image)
  // const readStream = fs.createReadStream(`public/${image}`)
  // console.log('readStream', readStream)
  // readStream.pipe(res)
  // const filesArray = []
  // const folder = fs.readdirSync('public/uploads/attachedFiles')
  // folder.forEach((file) => {
  //   if (product.images.some((image) => image.fileName === file)) {
  //     filesArray.push(file)
  //   }
  // })
  // const jsonObject = JSON.stringify(filesArray)
  // console.log('product', product)
  // console.log('filesArray', filesArray)
  // console.log('folder', folder)
  // if (product) {
  //   res.json(product)
  // } else {
  //   res.status(404)
  //   throw new Error('Product not found')
  // }
})

// description  add single product
// route        POST ~/products
// access       private
router.post('/', protect, upload.any('image'), async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user._id,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    topProduct: req.body.topProduct,
  })

  // attach files if there is any
  if (req.files.length != 0) {
    attachFiles(product, req.files)
  }

  const createdProduct = await product.save()

  res.status(201).json(createdProduct)
})

// description  update single product
// route        PUT ~/products
// access       private
router.put('/:id', protect, upload.any('image'), async (req, res) => {
  const {
    name,
    description,
    countInStock,
    category,
    price,
    topProduct,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.description = description
    product.countInStock = countInStock
    product.category = category
    product.price = price
    product.topProduct = topProduct

    // attach files if there is any
    if (req.files.length != 0) {
      attachFiles(product, req.files)
    }
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  }
})

// description  delete single product
// route        DELETE ~/products/:id
// access       private
router.delete('/:id', protect, deleteProduct)

function attachFiles(product, files) {
  files.forEach((file) => {
    const fileObject = {
      fileName: file.filename,
      originalName: file.originalname,
    }

    product.images.push(fileObject)
  })
}

module.exports = router
