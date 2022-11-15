const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProduct,
  addProduct,
} = require('../controllers/productController')

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
router.post('/', addProduct)

module.exports = router
