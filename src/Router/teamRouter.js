const express = require('express');
const multer = require('multer')

// middleware

const authJwtToken = require('../middleware/authJwtToken');
const storage = require('../middleware/storage')


// middleware

const newStorage = require('../middleware/storage')
const upload = multer({storage: storage})

// module

const { getTeamCard, createTeamCard, deleteTeamCard } = require('../Controller/teamController')

//

const teamRouter = express.Router();


teamRouter.get('/team', authJwtToken, getTeamCard)
teamRouter.post('/team', authJwtToken, upload.single('file'),  createTeamCard)
teamRouter.post('/team/:id', authJwtToken,  deleteTeamCard)

//

module.exports = teamRouter;