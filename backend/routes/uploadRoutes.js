const express = require('express')
const router = express.Router()
const upload = require('../controllers/uploadController')
const asyncHandler = require('express-async-handler')
const fs = require('fs')

router.post('/', upload.array('image', 12), (req, res) => {
  res.send(req.files)
})

router.post(
  '/unlink',
  asyncHandler(async (req, res) => {
    try {
      req.body.forEach(
        (path) => fs.existsSync(path.path) && fs.unlinkSync(path.path),
      )
      res.json({ message: 'success' })
    } catch (err) {
      console.error(err)
    }
  }),
)

module.exports = router
