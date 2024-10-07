
const product = {
  id: 1,
  name: 'Laptop',
  count: 1,
}
const product2 = {
  id: 1,
  name: 'Laptop',
  count: 3,
}
const product3 = {
  id: 2,
  name: 'Smartphone',
  count: 1,
}

function Cart() {
  this.products = []
}
Cart.prototype.addProduct = function (product) {
  console.log('test')
  const item = this.products.find(item => item.id === product.id)
  if (item != undefined) {
    item.count = item.count + product.count
  }
  else {
    this.products.push(product)
  }
}
Cart.prototype.increaseAmount = function(id){
  const item = this.products.find(item => item.id === id)
  if(item != undefined){
    item.count++
  }
}
Cart.prototype.decreaseAmount = function(id) {
  const item = this.products.find(item => item.id === id)
  if(item != undefined && item.count > 1) {
    item.count--
  }
  else if(item.count === 1){
    this.products.filter(item => this.products.id != item.id)
  }
}

const cartOut = new Cart(product)
cartOut.addProduct(product)
cartOut.addProduct(product2)
cartOut.addProduct(product3)
cartOut.increaseAmount(2)
cartOut.decreaseAmount(2)
console.log(cartOut)
