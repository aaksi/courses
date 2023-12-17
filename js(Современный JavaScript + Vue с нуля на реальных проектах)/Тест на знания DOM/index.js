const map = ["_id", "name", "isActive", "balance", 'email'];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
]


const res = []
const resObj = {}

users.forEach(user => {
  let obj = {}
  for (userKey in user) {
    map.forEach(el => {
      if (el === userKey) {
        obj[userKey] = user[userKey]
      }
    })
  }
  res.push(obj)
})

// console.log(res);



function sortArr(arr, sortVal, sortPos = 'desc') {
  let sort = sortPos
  let newArr = arr.slice(0)
  let sortValType = typeof arr[0][sortVal]

  if (sortValType == 'number') {
    newArr.sort((a, b) => {
      return a[sortVal] - b[sortVal]
    })
  }
  else if (sortValType === 'string') {
    newArr.sort((a, b) => {
      let x = a[sortVal].toLowerCase();
      let y = b[sortVal].toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
  }
  else {
    newArr.sort((a, b) => a - b)
  }

  console.log(newArr);
}

// sortArr(users, 'balance', 'asc')
// console.log('users', users);







// function debounce(func, delay){
//   setTimeout((func), delay)
// }



// const debouncedFunc = debounce(function (a, b){
// 	console.log(a + b);
// 	return a + b
// }, 2000);

// debouncedFunc(2, 3); // вызов отложен на 2000 мс
// debouncedFunc(3, 3); // предыдущий отложенный вызов игнорируется, текущий откладывается на 2000 мс


// document.addEventListener('DOMContentLoaded', () => {
//   // const map = ['#', 'name', 'email', 'balance']
//   const tableSchema = {
//     index: '#',
//     name: 'Name',
//     email: 'Email',
//     balance: 'Balance'
//   }

//   const users = res
//   let table = document.querySelector('.js-table')
//   createTh(tableSchema)
//   createTd(users)


//   console.log(users);

//   function createTd(arr) {
//     let fragment = document.createDocumentFragment()
//     let tr = document.createElement('tr')



//   }


//   function createTh(obj) {
//     let fragment = document.createDocumentFragment()
//     let tr = document.createElement('tr')
//     for(key in obj){
//       const th = document.createElement('th')
//       th.textContent = obj[key]
//       tr.appendChild(th)
//     }
//     fragment.appendChild(tr)
//     table.appendChild(fragment)
//   }
// })



document.addEventListener('DOMContentLoaded', () => {
  const tableSchema = {
    index: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance'
  }

  function generateThead(tableSchema) {
    const thead = document.createElement('thead')
    const tr = generateTr(tableSchema, 'th')
    thead.appendChild(tr)
    return thead
  }
  function generateTr(tableSchema, tagName = 'td') {
    const tr = document.createElement('tr')
    Object.values(tableSchema).forEach(val =>{
      const td = document.createElement(tagName)
      td.textContent = val
      tr.appendChild(td)
    })
    return tr
  }

  function generateTableTemplate() {
    const table = document.createElement('table')
    table.classList.add('table')
    return table
  }

  function genderTbody(tableSchema, items){
    const tbody = document.createElement('tbody')
    items.forEach((item,idx) =>{
      item.index = idx+1
      const itemSchema = generateItemsSchema(tableSchema, item)
      const tr = generateTr(itemSchema, 'td')
      tbody.appendChild(tr)
    })

    return tbody
  }

  function generateItemsSchema(tableSchema, item){
    const itemSchema = Object.keys(tableSchema).reduce((acc,key)=>{
      if(key in item){
        acc[key] = item[key]
      }
      return acc
    }, {}) 

    return itemSchema
  }

  function initTable(tableSchema, items) {
    const container = document.querySelector('.js-table')
    const table = generateTableTemplate()
    const header = generateThead(tableSchema)
    const body = genderTbody(tableSchema, items)
    table.appendChild(header)
    table.appendChild(body)
    container.appendChild(table)
  }

  initTable(tableSchema, users)
})


