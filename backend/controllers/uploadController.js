const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'frontend/public/images/');
  },
  filename(req, file, cb) {
    const randomImages = Math.random() * Date.now();
    cb(
      null,
      `${file.fieldname}-${randomImages}${path.extname(file.originalname)}`
    );
  },
});

const imageMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];

const checkFileType = (file, cb) => {
  console.log('am i getting here??');
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = imageMimeTypes.includes(file.mimetype);
  // const mimetype = filetypes.test(file.mimetype);
  // console.log('mimetype', mimetype)

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
};

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;