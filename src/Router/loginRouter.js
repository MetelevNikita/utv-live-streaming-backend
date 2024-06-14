const express = require('express');

// module

const postLogin = require('../Controller/loginController');



const loginRouter = express.Router();

//


loginRouter.post('/login', postLogin)


module.exports = loginRouter;



