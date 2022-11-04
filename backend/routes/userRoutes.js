const express = require('express')
const router = express.Router()
const { authUser } = require('../controllers/userController')

// @description   auth user & get token
// @route         POST /api/users/login
// @access        public
router.post('/login', authUser)

module.exports = router
