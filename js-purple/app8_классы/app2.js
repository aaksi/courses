class User {
  #password
  #user

  constructor(user) {
    this.#user = user
  }

  set newPassword(pass){
    this.#password = pass
  }

  get password(){
    return this.#password
  }
}


const newUser = new User('stas', '1235')
console.log(newUser)
newUser.newPassword('11111')
console.log(newUser.password);
