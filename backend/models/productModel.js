const mongoose = require('mongoose')

const attachedFileBasePath = 'uploads/attachedFiles'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [],
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    topProduct: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

productSchema.virtual('attachedFilePath').get(function () {
  // console.log('model this.attachment', this.attachment)
  if (this.attachment.length != 0) {
    return this.attachment.map((element) => {
      // console.log(element)
      return {
        source: path.join('/', attachedFileBasePath, element.fileName),
        name: element.originalName,
      }
    })
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
module.exports.attachedFileBasePath = attachedFileBasePath
