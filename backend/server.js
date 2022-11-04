const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

// const products = require('./data/products')

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use('/api/products', productRoutes)

// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

app.listen(PORT, () => {
  console.log(
    `Listening to server on port ${PORT} in ${process.env.NODE_ENV} mode`,
  )
})
