
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

console.log(user)





let cars = {}

function isEmpty(cars) {
  for (let car in cars) {
    return false
  }
  return true
}
console.log(isEmpty(cars))






let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let price = 0
for(el in salaries){
  price += salaries[el]
}
console.log('salaries: '+ price);






let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu)

console.log(menu)
