const Pool = require('../database/db')



const getAllPortfolio = async (req, res) => {
  try {

    const allPortfolio = await Pool.query('SELECT * FROM portfolio')

    if(allPortfolio.rows.length < 1) {
      res.status(200).send({message:  'No portfolio found'})
      return
    }

    res.status(200).send(allPortfolio.rows)

  } catch (error) {
    console.log(error)
    res.status(500).send({message: 'Internal Server Error' })
  }
}



const getSinglePortfolio  = async  (req, res)  =>  {
  try {

    const { id } = req.params

    const singlePortfolio = await Pool.query('SELECT * FROM portfolio WHERE id=$1', [id])

    if(singlePortfolio.rows.length  <  1)  {
      res.status(200).send({message:  'No portfolio found'})
      return
    }

    res.status(200).send(singlePortfolio.rows[0])

  } catch (error) {
    console.log(error)
    res.status(500).send({message:  'Internal Server Error'})
  }
}





const postPortfolio = async  (req, res)  =>  {
  try {
    const { title, category, description, link } = req.body
    const host = req.host;

    console.log(req.file)
    const filePath = req.protocol + "://" + host + '/' + req.file.path

    const newPortfolio  = await Pool.query('INSERT INTO portfolio (title, category, description, image, link) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, category, description, filePath, link])

    if(newPortfolio.rows.length  <  1)  {
      res.status(200).send({message:  'Portfolio not created'})
      return
    }

    res.status(200).send(newPortfolio.rows[0])


  } catch (error) {
    console.log(error)
    res.status(500).send({message:  'Internal Server Error'})
  }
}


const deletePortfolio  = async  (req, res)  =>  {
  try {

    const { id } = req.params

    const deletePortfolio   = await Pool.query('DELETE FROM portfolio WHERE id=$1',  [id])

    if(deletePortfolio.rows.length  <  1)   {
      res.status(200).send({message:  'Portfolio not deleted'})
      return
    }


    res.status(200).send(deletePortfolio.rows[0])


  } catch (error) {
    console.log(error)
    res.status(500).send({message:  'Internal Server Error'})

  }
}

module.exports = { getAllPortfolio, getSinglePortfolio, postPortfolio, deletePortfolio }