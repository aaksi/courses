const URL = 'https://dummyjson.com/products/categories'
// let select = document.createElement('select')

// fetch(URL)
//   .then(data => data.json())
//   .then(data => {
//     console.log(data)
//     data.forEach(el => {
//       addOption(select, el.name)
//     })

//     document.querySelector('body').insertAdjacentElement('afterbegin', select)
//   })


// function addOption(select, value) {
//   const option = document.createElement('option')
//   option.value = value
//   option.innerHTML = value

//   select.insertAdjacentElement('beforeend', option)
// }


function createSelect(arr) {
  const el = document.querySelector('.filter')
  el.innerHTML = `<select>
   ${
    arr.map(arrEl => `<option value=${arrEl.name}>${arrEl.name}</option>`)
   }
  </select>`
}

function getCategories() {
  fetch(URL)
    .then(response => response.json())
    .then(data => createSelect(data))
    .catch(error=> console.error(`Ошибка ${error}`))
}

getCategories()
