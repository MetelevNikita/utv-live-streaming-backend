
const formTeam = document.getElementById('form-team')

const teamUrl = 'https://www.utvls.tw1.su/api/v1/team'

console.log(teamUrl)


formTeam.addEventListener('submit', async (e) => {
  e.preventDefault()


  try {

    const newFormTeam = new FormData()

    const name = document.getElementById('name-team').value
    const profession = document.getElementById('profession-team').value
    const file = document.getElementById('file-team').files[0]


    newFormTeam.append('name', name)
    newFormTeam.append('profession', profession)
    newFormTeam.append('file', file)


    console.log(...newFormTeam)


    const responce = await fetch(teamUrl, {
      method: 'POST',
      body: newFormTeam
    }
  )

  const data  = responce
  console.log(data)
  return data

  } catch (error) {

    console.log(error)

  }

})