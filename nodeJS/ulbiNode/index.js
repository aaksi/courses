const crypto = require("crypto-js");

const start = Date.now()

crypto.pbkdf2('12345678', '5', 1000000, 64, 'sha512', ()=>{
  console.log('1 end', Date.now() - start )
})

console.log(start)
