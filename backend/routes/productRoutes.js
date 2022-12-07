const express = require('express')
const router = express.Router()
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
router.get('/:id', getProduct)

// description  add single product
// route        POST ~/products
// access       private
router.post('/', protect, upload.any('images'), async (req, res) => {
  // console.log('req', req.files)
  // console.log('hitting?')
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user._id,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    topProduct: req.body.topProduct,
  })

  if (req.files.length != 0) {
    attachFiles(product, req.files)
  }

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// description  update single product
// route        PUT ~/products
// access       private
router.put('/:id', protect, updateProduct)

// description  delete single product
// route        DELETE ~/products/:id
// access       private
router.delete('/:id', protect, deleteProduct)

function attachFiles(product, files) {
  console.log('function attach product', product)
  console.log('function attach files', files)
  files.forEach((file) => {
    const fileObject = {
      fileName: file.filename,
      originalName: file.originalname,
    }
    // console.log('files')
    product.images.push(fileObject)
    // console.log('attaching file object', fileObject)
  })
}

module.exports = router
