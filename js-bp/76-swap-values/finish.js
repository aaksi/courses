/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

console.log(a, b)
// first second

// Напишите код здесь
function replaceValue(val1, val2) {
  let cache = val1
  a = val2
  b = cache
}

replaceValue(a, b)

console.log(a, b)
// second first
