const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')

// const products = require('./data/products')

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Listening to server on port ${PORT} in ${process.env.NODE_ENV} mode`,
  )
})
