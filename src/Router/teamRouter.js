const express = require('express');
const multer = require('multer')

// middleware

const authJwtToken = require('../middleware/authJwtToken');
const storageTeam = require('../middleware/storageTeam')


// middleware

const newStorage = require('../middleware/storageTeam')
const upload = multer({storage: storageTeam})

// module

const { getTeamCard, createTeamCard, deleteTeamCard } = require('../Controller/teamController')

//

const teamRouter = express.Router();


teamRouter.get('/team', authJwtToken, getTeamCard)
teamRouter.post('/team', authJwtToken, upload.single('file'),  createTeamCard)
teamRouter.post('/team/:id', authJwtToken,  deleteTeamCard)

//

module.exports = teamRouter;