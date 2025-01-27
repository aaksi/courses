import axios from 'axios'
import { URL_PRODUCTS, URL_CATEGORIES, URL_RELATED, URL_USERS } from '@/constants'
import { getCookie } from './auth'

export const getProducts = async () => {
  const data = await axios.get(URL_PRODUCTS)

  return data?.data
}

export const getCategories = async () => {
  const data = await axios.get(URL_CATEGORIES)

  return data?.data
}

export const getProduct = async (id) => {
  const data = await axios.get(`${URL_PRODUCTS}/${id}`)

  return data?.data
}
export const getProductRelated = async () => {
  const data = await axios.get(URL_RELATED)

  return data?.data
}

// export const addProductToCart = async (id) => {
//   const cookie = getCookie()
//   const userId = cookie?.user?.id
//   if (!userId) return

//   try {
//     const data = await axios.patch(`${URL_USERS}/${1}`, {
//       ['cart']: [1, 3]
//     })
//     console.log(data)

//   } catch (err) {
//     console.log(err)

//   }

// }
