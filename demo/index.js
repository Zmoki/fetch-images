import fetchImages from "../src/fetch-images";

const getImageUrl = () => {
  // Hash in the end to avoid browser caching images
  return 'http://lorempixel.com/500/500?h=' +
    Math.floor(Math.random() * 10000);
};

let img = new Image();

const images = [
  getImageUrl(),
  getImageUrl(),
  img
];

const failImages = [
  getImageUrl(),
  'blah'
];

fetchImages(images)
  .then(values => {
    values.map(value => document.getElementById("result").appendChild(value[0]));
  })
.catch(err => document.getElementById("error").innerText = err);

fetchImages(...images)
  .then(values => {
    values.map(value => document.getElementById("result2").appendChild(value[0]));
  })
.catch(err => document.getElementById("error").innerText = err);

fetchImages(failImages)
  .then(values => {
    values.map(value => document.getElementById("result").appendChild(value[0]));
  })
.catch(err => document.getElementById("error").innerText = err);

img.src = getImageUrl();
