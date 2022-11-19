const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    )
  },
})

const imageMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']

const checkFileType = (file, cb) => {
  const fileTypes = /jpg|jpeg|png/
  const extname = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase(),
  )
  const mimeType = fileTypes.includes(imageMimeTypes)

  if (extname && mimeType) {
    return cb(null, true)
  } else {
    return cb('Images only')
  }
}

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

module.exports = router
