const express = require('express')
const router = express.Router()
const { getProducts, getProduct } = require('../controllers/productController')

// description  fetch all products
// route        GET ~/products
// access       public
router.get('/', getProducts)

// description  fetch single products
// route        GET ~/products/:id
// access       public
router.get('/:id', getProduct)

module.exports = router
