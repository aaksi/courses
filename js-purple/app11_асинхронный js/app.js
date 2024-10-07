// let products = ''
// let res = 0

// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://dummyjson.com/products')
// xhr.send()

// xhr.onload = async function () {
//   products = await xhr.response
//   arrPrice(JSON.parse(products).products)
// }


// function arrPrice(arr) {


//   arr.forEach(el => {
//     res += el.price
//   })


//   console.log(res / arr.length)

// }



const request = new XMLHttpRequest()
request.open('GET', 'https://dummyjson.com/products')
request.send()

request.addEventListener('load', function() {
  const { products } = JSON.parse(this.responseText)
  const sum = products.reduce((acc, p) => acc += p.price, 0)
  console.log(sum / products.length)

})
