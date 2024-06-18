const multer = require('multer');




  const storageProduct = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/equipment');
  },

  filename: (req, file, cb) =>  {
    cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }

})



module.exports = storageProduct;