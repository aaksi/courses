
import { ref } from 'vue'
import { defineStore } from 'pinia'


// export const useRootStore = defineStore('root', () => {
//   // const products = ref([])
//   // const categories = ref([])
  

//   // return { products }
// })
export const useCatalogStore = defineStore('catalog', () => {
  const activeCategory = ref(1)

  const setActiveCategory = (id) => {
    activeCategory.value = id
  }

  return { activeCategory, setActiveCategory }
})
