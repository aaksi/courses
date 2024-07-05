'use strict'


let weatherMap = new Map([
  ['London', 10],
  ['Paris', 20],
  ['Berlin', 30]
])


// let weatherMap2 = new Map()


// for (const [key, value] of weatherMap) {
//   weatherMap2.set(value, key)
// }

// console.log(weatherMap =  weatherMap2)
// console.log(weatherMap)

weatherMap = new Map([...weatherMap].map(el => el.reverse()))
console.log(weatherMap);
