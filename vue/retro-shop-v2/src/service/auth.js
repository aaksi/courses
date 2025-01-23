import axios from 'axios'

export const formHandler = (url, data) => {
  axios.post(url, data)
    .then((res) => {
      console.log(res)
      console.log(res.data.token)
    })
    .catch((err) => console.log(err))

}



