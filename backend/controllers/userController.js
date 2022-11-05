const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken.js')
const User = require('../models/userModel.js')

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // res.send({ email, password })

  const user = await User.findOne({ email: email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('success')
})

module.exports = { authUser, getUserProfile }
