const express = require('express')
const router = express.Router()
const upload = require('../controllers/uploadController')

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

module.exports = router
