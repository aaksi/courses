
import { ref } from 'vue'
import { defineStore } from 'pinia'


// export const useRootStore = defineStore('root', () => {
//   // const products = ref([])
//   // const categories = ref([])


//   // return { products }
// })
export const useCatalogStore = defineStore('catalog', () => {
  const activeCategory = ref('all')

  const setActiveCategory = (name) => {
    activeCategory.value = name
  }

  return { activeCategory, setActiveCategory }
})


export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])


  const addToCart = (item) => {
    if (cartItems.value.find(el => el.id === item.id)) return
    cartItems.value.push(item)
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }

  const deleteItemCart = (id) => {
    cartItems.value = cartItems.value.filter(el => el.id !== id)
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }

  const getItemsFromLocalstorage = () => {
    cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
  }


  return { cartItems, addToCart, getItemsFromLocalstorage, deleteItemCart }
})
