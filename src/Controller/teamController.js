const Pool = require('../database/db')




// get


const getTeamCard = async (req, res) => {

  try {

    const teamCard = await Pool.query('SELECT * FROM team')
    if (teamCard.rows.length < 1) {
      res.status(400).json({message: 'No team found'})
    }

    res.status(200).json(teamCard.rows)

  } catch (error) {
    console.log(error)
    res.status(400).json({message:  'Что то пошло не так'})
  }
}


// create


const createTeamCard = async (req, res) => {

  try {

    const { name, profession } = req.body
    const file = req.file
    console.log(req.file)

    const urlFile = `https://www.utvls.tw1.su/${file.filename}`

    const newTeamCard = await Pool.query('INSERT INTO team (name, profession, image) VALUES ($1, $2, $3) RETURNING *', [name, profession, urlFile])

    if(!newTeamCard.rows[0]) {
      res.status(400).json({message: 'Карточка не создана'})
      return
    }

    res.status(200).json(newTeamCard.rows[0])

  } catch (error) {
    console.log(error)
    res.status(500).json({message:  'internal server error'})
  }

}



// delete


const deleteTeamCard  = async  (req, res)  =>  {
  const { id } = req.params

  if(!id.typeof ===  'number')  {
    res.status(400).json({message:  'Id не число'})
  }

  const  deleteTeamCard  = await Pool.query('DELETE FROM team WHERE id = $1',  [id])

  if(!deleteTeamCard.rows[0])   {
    res.status(400).json({message: `По данному ${id} не найдено карточки`})
  }
  console.log(deleteTeamCard.rows[0])
  res.status(200).send(deleteTeamCard.rows[0])
}


module.exports = { getTeamCard, createTeamCard, deleteTeamCard }