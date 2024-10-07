// function timer(ms) {
//   let seconds = ms / 1000
//   let result = ''
//   let resSeconds = 0
//   const timer = setInterval(() => {

//     const minutes = seconds / 60 > 1 ? Math.floor(seconds / 60) : 0



//     if ((seconds / 60) > 1) {

//       resSeconds = seconds - minutes * 60
//     }
//     else {
//       resSeconds = seconds
//     }

//     result = `${(minutes > 9 ? minutes : '0' + minutes) + ' : ' + (resSeconds > 9 ? resSeconds : '0' + resSeconds)}`

//     seconds = seconds - 1
//     console.log(result)
//     if (seconds === -1) clearInterval(timer)

//   }, 1000)

//   setTimeout(() => {
//     console.log('🍕')
//   }, Math.floor(Math.round(seconds + 2) * 1000))
// }


// console.log(timer(4000))




function pizzaTimer(ms) {
  const end = new Date().getTime() + ms
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        minute: 'numeric',
        second: 'numeric',
      }).format(end + 100 - new Date())
    )

  }, 1000)

  setTimeout(() => {
    clearInterval(interval)
    console.log('🍕')
  }, ms)
}


pizzaTimer(10000)
