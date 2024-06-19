const express = require('express');
const multer= require('multer')




// module

const { getAllPortfolio, getSinglePortfolio, postPortfolio, deletePortfolio } = require('../Controller/portfolioController')
const storageWork = require('../middleware/storageWork')

//

const portfolioRouter = express.Router();
const upload = multer({storage: storageWork})

//


portfolioRouter.get('/portfolio', getAllPortfolio)

portfolioRouter.get('/portfolio/:id',  getSinglePortfolio)

portfolioRouter.post('/portfolio', upload.single('file'),  postPortfolio)

portfolioRouter.delete('/portfolio/:id', deletePortfolio)



module.exports = portfolioRouter;