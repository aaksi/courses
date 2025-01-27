import axios from 'axios'

export const getCookie = () => {
  const res = document.cookie.split('; ').reduce((acc, item) => {
    if (item) {
      let [name, val] = item.split('=')
      acc[name] = JSON.parse(val)
    }
    return acc
  }, {})
  return res
}

export const deleteCookie = (name) => {
  document.cookie = `${name}=;Max-age=-1;`
}

export const setCookie = (name, data) => {
  document.cookie = `${name}=${JSON.stringify(data)}`
}

export const userAuthCheck = async (url, token) => {
  try {
    const res = await checkToken(url, token)

    if (res.status === 200 && res.data) {
      setCookie('user', res.data)
      return true
    }
    return false
  } catch (err) {
    console.log(err)
    deleteCookie('token')
    deleteCookie('user')
    return false
  }
}

export const logOut = () => {
  deleteCookie('name')
  deleteCookie('token')
  localStorage.clear()
  location.reload()
}


const checkToken = (url, token) => {
  return axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
