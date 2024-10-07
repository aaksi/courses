const URL = 'https://dummyjson.com/products'

// function myFetch(url) {
//   let xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.send()


//   xhr.addEventListener('load', () => {
//     const prom = new Promise((resolve, reject) => {
//       if (xhr.status != 200) {
//         reject(new Error('error'))
//       }
//       else {
//         resolve = xhr.response
//       }

//     })
//   })

// }


// console.log(myFetch(URL))



function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()

    xhr.addEventListener('load', function () {
      if (this.status > 400) reject(new Error(this.status))
      resolve(this.responseText)
    })

    xhr.addEventListener('error', function () {
      reject(new Error(this.status))
    })

    xhr.addEventListener('timeout', function () {
      reject(new Error('Timeout'))
    })
  })
}


myFetch(URL)
  .then(data => console.log(data))
  .catch(err => console.error(err))


async function getProducts(url) {
  try {

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }
}
