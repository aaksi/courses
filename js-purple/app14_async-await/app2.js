const URL = 'https://bored.api.lewagon.com/api/activity'

document.querySelector('.js-btn').addEventListener('click', getActivity)

async function getActivity() {
  try {
    const res = await Promise.all([
      getOneActivity(), getOneActivity(), getOneActivity()
    ])
  } catch (e) {
    console.error(e)
  }


  addActivityHTML(res)
}

async function getOneActivity() {
  const response = await fetch(URL)
  const data = await response.json(URL)
  return data

}

function addActivityHTML(arr) {
  const wrap = document.querySelector('.js-list')
  let box = document.createElement('div')

  arr.forEach(el => {
    let li = document.createElement('li')
    li.innerHTML = el.activity
    box.insertAdjacentElement('beforeend', li)
  })

  wrap.innerHTML = box.innerHTML
}
