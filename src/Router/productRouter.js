const express = require('express');
const multer = require('multer');

// module

const { getAllProduct, getSingleProduct, postProduct,deleteProduct  } = require('../Controller/productController')
const storgaeProduct = require('../middleware/storageProduct')

//

const upload = multer({storage: storgaeProduct})


const productRouter = express.Router();

productRouter.get('/product', getAllProduct)

productRouter.get('/product/:id',  getSingleProduct)

productRouter.post('/product', upload.single('file'),  postProduct)

productRouter.delete('/product/:id',  deleteProduct)



module.exports = productRouter;