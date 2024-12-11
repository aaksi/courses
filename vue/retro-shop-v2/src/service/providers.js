import axios from 'axios'
import { URL_PRODUCTS, URL_CATEGORIES, BASE_COUNT_PRODUCTS_CATALOG } from '@/constants'

export const getProducts = async () => {
  const data = await axios.get(URL_PRODUCTS)

  return data?.data
}

export const getCategories = async () => {
  const data = await axios.get(URL_CATEGORIES)
  console.log(data)

  return data?.data
}

