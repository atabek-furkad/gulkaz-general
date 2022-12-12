const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')

// const products = require('./data/products')

dotenv.config()

connectDB()

const app = express()

// to be able to process objects send from input forms with POST method
app.use(express.json())

// to be able to access uploads dir from frontend
app.use(express.static(path.join(__dirname, '..', 'uploads')))

const PORT = process.env.PORT || 5000

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Listening to server on port ${PORT} in ${process.env.NODE_ENV} mode`,
  )
})
