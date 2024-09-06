const Pool = require('../database/db')
const jwt = require('jsonwebtoken')


const postLogin = async (req, res) => {

  try {

    const {email, password}  =  req.body;

    if (!email || !password)   {
      res.status(400).send({message: 'поля не заполнены'})
      return
    }

    const confirmLogin = await Pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password])

    if (!confirmLogin.rows)  {
      res.status(401).send({message: 'Неверный email или пароль'})
      return
    }

    const token  = jwt.sign({id: confirmLogin.rows[0].id, email: confirmLogin.rows[0].email}, process.env.SECRET_KEY, {expiresIn: '1h'})
    console.log(token)
    res.cookie('token', token)
    res.redirect('/create')



  } catch (error) {
    console.log(error)
    res.status(500).send({message: `Что то пошло не так ${error}`})
  }
}

module.exports = postLogin