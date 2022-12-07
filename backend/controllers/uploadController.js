const multer = require('multer')
const path = require('path')
const Product = require('../models/productModel')
// const uploadPath = path.join('public', Product.attachedFileBasePath)

const fileMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
const upload = multer({
  dest: 'uploads',
  fileFilter: (req, file, callback) => {
    callback(null, fileMimeTypes.includes(file.mimetype))
  },
  // limits: { fieldSize: 25 * 1024 * 1024 },
})

module.exports = upload
