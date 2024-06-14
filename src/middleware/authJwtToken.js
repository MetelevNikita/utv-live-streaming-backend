const jwt = require('jsonwebtoken')



const authJwtToken = (req, res, next) => {

  const token = req.cookies.token
  if(!token) {
    res.redirect('/login')
    return
  }

  const user = jwt.verify(token , process.env.SECRET_KEY)

  if(!user) {
    res.redirect('/login')
    return
  }

  next()

}

module.exports  =  authJwtToken