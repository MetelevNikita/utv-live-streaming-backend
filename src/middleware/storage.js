const multer = require('multer');




  const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload');
  },

  filename: (req, file, cb) =>  {
    cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }

})



module.exports = storage;