// Custom Http Module

// e3c45c6dc90e4ae0bd115c6279cf05cd

function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = 'e3c45c6dc90e4ae0bd115c6279cf05cd'
  const apiUrl = 'https://newsapi.org/v2'

  return {
    topHeadlines(country = 'ru', cb , category='') {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb)
    },
    everything(query, cb) {
      http.get(`${apiUrl}/top-headlines?q=${query}&apiKey=${apiKey}`, cb)
    },
  }
})()

//elements
const form = document.forms['newsControls']
const countrySelect = form.elements['country']
const searchInput = form.elements['search']
const categorySelect = form.elements['category']

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loadNews()
})

//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  loadNews()
});


//Load news function
function loadNews() {
  showLoader()
  const country = countrySelect.value
  const searchText = searchInput.value
  const category =  categorySelect.value

  if (!searchText) {
    newsService.topHeadlines(country, onGetResponse, category)
  }
  else {
    newsService.everything(searchText, onGetResponse)
  }
}

// function on get response from server
function onGetResponse(err, res) {
  removeLoader()
  console.log(res);
  if (err) {
    showAlert(err, 'error-msg')
    return
  }
  if (!res.articles.length) {
    // showEmptyMessage
    return
  }
  renderNews(res.articles)
}


// function render news
function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row')
  if (newsContainer.children.length) {
    clearContainer(newsContainer)
  }
  let fragment = ''
  news.forEach(newsItem => {
    const el = newsTemplate(newsItem)
    fragment += el
  })
  newsContainer.insertAdjacentHTML('afterbegin', fragment)
}


function clearContainer(container) {
  let child = container.lastElementChild
  while (child) {
    container.removeChild(child)
    child = container.lastElementChild
  }

}

// news Item template function
function newsTemplate({ urlToImage, title, url, description }) {
  urlToImage = !urlToImage ? 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : urlToImage
  return `
    <div class='col s12'>
      <div class='card'>
        <div class='card-image'>
          <img src='${urlToImage || ''}'>
          <span class='card-title'>${title || ''}</span>
        </div>
        <div class='card-content'>
          <p>${description || ''}</p>
        </div>
        <div class='card-action'>
          <a href='${url}'>Read more</a>
        </div>
      </div>
    </div>
  `
}


function showAlert(msg, type = 'success') {
  M.toast({ html: msg, classes: type })
}

function showLoader(){
  document.body.insertAdjacentHTML('afterbegin', `<div class='progress'><div class='indeterminate'></div></div>`)
}
function removeLoader(){
  const loader = document.querySelector('.progress')
  if(loader){
    loader.remove()
  }
}
