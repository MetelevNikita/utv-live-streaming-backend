const multer = require('multer');




  const storageTeam = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/upload/team'));
  },

  filename: (req, file, cb) =>  {
    cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }

})



module.exports = storageTeam;