const URL = 'https://dummyjson.com/products'


function getData(url, errorMessage) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMessage} ${response.status}`)
      }
      return response.json()
    })
}

getData(URL, 'Can not get products')
  .then(({ products }) => {
    console.log(products)
    return getData(URL + products[0])
  })
  .then(data=>{
    console.log(data);
  })
  .catch(error =>{
    const el = document.querySelector('.filter')
    el.innerHTML = error.message
  })
