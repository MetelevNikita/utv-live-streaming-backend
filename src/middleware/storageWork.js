const multer = require('multer');




  const storageWork = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/work');
  },

  filename: (req, file, cb) =>  {
    cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }

})



module.exports = storageWork;