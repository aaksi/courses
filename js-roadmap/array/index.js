document.addEventListener('DOMContentLoaded', ()=>{
  let styles = ['Джаз', 'Блюз']
  styles.push('Рок-н-ролл')
  styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
  styles.shift()
  styles.unshift('рэп', ' регги')

  console.log(styles);
})

document.addEventListener('DOMContentLoaded', ()=>{
  
  function  sumInput() {
    let numbers = []

    while(true){
      let value = prompt('Введите число', 0)

      if(value === null || value === '' || !isFinite(value) ) break
      
      numbers.push(+value)
    }

    let sum = 0 
    for(let num of numbers){
      sum += num
    }

    console.log(sum)
  }

  // sumInput()
})
