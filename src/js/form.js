import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const name1 = e.target.elements.text.value;
  getImages(name1);
}
function getImages(imageName) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = `?key=42244412-4baf4dd8f3efd9c6d484c6d30&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + params;
  return fetch(url)
    .then(res => res.json())
    .then(images => {
      if (images.hits.length === 0) {
        console.log('hihihih');
      } else {
        console.log(images);
      }
    });
}
getImages('cat');
getImages('hdbfdhbfdsbfdbf');
