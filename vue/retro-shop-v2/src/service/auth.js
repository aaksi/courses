

export const setAuthTokenCookie = (token) => {

}

export const getCookie = () => {
  const res = document.cookie.split('; ').reduce((acc, item) => {
    const [name, val] = item.split('=')
    acc[name] = val
    return acc
  }, {})
  return res
}

