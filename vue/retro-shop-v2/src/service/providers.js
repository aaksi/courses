import axios from 'axios'
import { URL_PRODUCTS, URL_CATEGORIES, URL_RELATED } from '@/constants'

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

export const checkToken = (url, token) => {
  return axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
