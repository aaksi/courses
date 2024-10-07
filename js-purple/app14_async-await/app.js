const URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'
// const loc = {}
// function success(pos) {
//   const crd = pos.coords

//   console.log("Your current position is:")
//   console.log(`Latitude : ${crd.latitude}`)
//   console.log(`Longitude: ${crd.longitude}`)
//   console.log(`More or less ${crd.accuracy} meters.`)

//   loc.latitude = crd.latitude
//   loc.longitude = crd.longitude


// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`)
// }

// navigator.geolocation.getCurrentPosition(success, error)

// console.log(loc);


// async function send(url) {
//   try{
//     const res = await fetch(`${url}?latitude=${loc.latitude}&longitude=${loc.longitude}`)
//     const data = await res.json()
//     console.log(data.city);
//   }catch(e){
//     console.error(e)
//   }
// }

// send(URL)

function getMyCoordinates() {
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      resolve({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    }, (err) => {
      reject(err)
    })
  })
}

async function getMyCity() {
  try{
    const {latitude, longitude} = await getMyCoordinates()
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longtitude=${longitude}`)
    if (!response.ok){
      throw new Error(response.status)
    }
    const data = await response.json()
    console.log(data.city);
    
  }catch(e){
    console.error(e)
  }
}

getMyCity()
