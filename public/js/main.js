
const formTeam = document.getElementById('form-team')

const teamUrl = 'https://www.utvls.tw1.su/api/v1/team'


console.log('v6.0')



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





// PRODUCT



const productUrl = 'https://www.utvls.tw1.su/api/v1/product'

const categoryArr = ['Камеры', 'Свет', 'Звук', 'Операторское оборудование', 'Техника для трансляций']


const categorySelect = document.createElement('select')
categorySelect.setAttribute('name', 'category')
categorySelect.setAttribute('placeholder', 'Выберите категорию')
categorySelect.setAttribute('id', 'category-product')
categorySelect.setAttribute('class', 'form_input_select')
categorySelect.setAttribute('required','required')


// create select

categoryArr.map((item) => {
  const option = document.createElement('option')
  option.setAttribute('value', item)
  option.textContent = item
  categorySelect.appendChild(option)
});


const formProduct  = document.getElementById('form-product')


const descriptionProduct = document.getElementById('description-product')
formProduct.insertBefore(categorySelect, descriptionProduct)


let checkedSelect = 'Камера'


categorySelect.addEventListener('change', (e)   =>   {
  console.log(e.target.value)

  return checkedSelect = e.target.value
})






formProduct.addEventListener('submit', async  (e)  =>  {
  e.preventDefault()

  try {

    const newFormProduct = new FormData()

    const titleProduct = document.getElementById('title-product').value
    const descriptionProduct = document.getElementById('description-product').value
    const priceProduct = document.getElementById('price-product').value
    const quantityProduct  = document.getElementById('quantity-product').value
    const file = document.getElementById('file-product').files[0]


    newFormProduct.append('title', titleProduct)
    newFormProduct.append('category', checkedSelect)
    newFormProduct.append('description', descriptionProduct)
    newFormProduct.append('price', priceProduct)
    newFormProduct.append('quantity', quantityProduct)
    newFormProduct.append('file', file)

    console.log(...newFormProduct)



    const responce = await fetch(productUrl,  {
      method: 'POST',
      body: newFormProduct
    })

    const data = responce
    console.log(data)
    return data


  } catch (error) {
    console.error(error)

  }
})



