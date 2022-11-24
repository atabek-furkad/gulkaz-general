const express = require('express')
const router = express.Router()
const upload = require('../controllers/uploadController')

router.post('/', upload.array('image', 12), (req, res) => {
  console.log('req', req.files)
  res.send(req.files)
})

module.exports = router
