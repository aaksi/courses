// class User {
//   #login
//   #_password

//   constructor(login, password) {
//     this.#login = login
//     this.#password = password
//   }

//   set #password(pass) {
//     this.#_password = pass.split('').reverse().join('')
//   }

//   get #password() {
//     return this.#_password.split('').reverse().join('')
//   }

//   get login() {
//     return this.#login
//   }

//   checkPassword(password) {
//     return this.#password === password
//   }

//   changePassword(oldPassword, newPassword) {

//     if (!this.checkPassword(oldPassword)) {
//       console.log(newPassword)
//       return false
//     }
//     this.#password = newPassword
//     return true
//   }
// }


// const user = new User('stas', '123')

// console.log(user.checkPassword('123'))
// console.log(user.changePassword('123', '3434'))
// console.log(user)



