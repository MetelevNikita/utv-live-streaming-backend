const multer = require('multer');
const path = require('path');

const PATH = path.join(__dirname, '..',  'public/upload/team');
console.log(PATH)


  const storageTeam = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'utv-live-streaming-backend/public/upload/team');
  },

  filename: (req, file, cb) =>  {
    cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }

})



module.exports = storageTeam;