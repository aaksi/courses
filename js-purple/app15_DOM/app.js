document.addEventListener('DOMContentLoaded', function () {
  const $input = document.querySelector('.js-input')
  const $text = document.querySelector('.js-text')
  const words = $text.querySelectorAll('p')

  $input.addEventListener('change', search)



  function search({ target }) {
    console.log(target.value)

    Array.from(words).map(el => el.textContent.toLowerCase() === target.value.toLowerCase() ? el.classList.add('is-active') : el.classList.remove('is-active'))

    // Array.from(words).forEach(el => {

    //   if (el.textContent == target.value) {
    //     el.classList.add('is-active')
    //   }
    // })
  }
})
