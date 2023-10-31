/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'ford',
    price: 1000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'lada',
    price: 100,
    isAvailableForSale: false,
  },
  {
    carBrand: 'reno',
    price: 1111,
    isAvailableForSale: true,
  },
]


cars.push({
  carBrand: 'nissan',
  price: 1200,
  isAvailableForSale: true,
})

console.log(cars);
