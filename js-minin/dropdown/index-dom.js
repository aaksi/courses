
document.addEventListener('DOMContentLoaded', () => {

  class Dropdown {
    constructor(item, options) {
      this.$el = item
      // this.items = options.items

      const itemsDropDown = this.$el.querySelectorAll('li')


      let items = []
      
      
      itemsDropDown.forEach($item => {
        let itemDropDown = {}
        itemDropDown.id = $item.dataset.id
        itemDropDown.label = $item.textContent
        items.push(itemDropDown)
      })


      this.items = items


      // this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
      this.$el.querySelector('.dropdown__label').textContent = items[0].label
      this.$el.querySelector('.dropdown__label').dataset.id = items[0].id

      this.$el.addEventListener('click', event => {
        if (event.target.classList.contains('dropdown__label')) {
          if (this.$el.classList.contains('open')) {
            this.close()
          } else {
            this.open()
          }
        }
        else if (event.target.tagName.toLowerCase() === 'li') {
          this.select(event.target.dataset.id)
        }
      })

      // const itemsHTML = this.items.map(i => {
      //   return `<li data-id='${i.id}'>${i.label}</li>`
      // }).join('')

      // this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)







      const itemsHTML = this.items.map(i => {
        return `<li data-id='${i.id}'>${i.label}</li>`
      }).join('')
      this.$el.querySelector('.dropdown__menu').innerHTML = ''
      this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id) {
      const item = this.items.find(i => i.id === id)
      this.$el.querySelector('.dropdown__label').textContent = item.label
      this.$el.querySelector('.dropdown__label').dataset.id = item.id
      this.close()
    }

    open() {
      this.$el.classList.add('open')
    }

    close() {
      this.$el.classList.remove('open')
    }
  }



  // const dropdown = new Dropdown('#dropdown', {
  //   items: [
  //     { label: 'Москва', id: 'msk' },
  //     { label: 'Санкт-Петербург', id: 'spb' },
  //     { label: 'Новосибирск', id: 'nsk' },
  //     { label: 'Краснодар', id: 'krd' },
  //   ]
  // })

  const $selectsDropdown = document.querySelectorAll('[data-dropdown]')

  $selectsDropdown.forEach($dropdown =>{
     const drop = new Dropdown($dropdown)
  })

  // const dropdown = new Dropdown('[ data-dropdown]')



})
