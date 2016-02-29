# Fetch images function

Function for preloading images.

Your request fetchImages with the array of links of images or HTMLImageElement.
fetchImages is resolve, if all images are downloaded successfully.
If one of the image will be broken, fetchImages rejects.

## Usage

```javascript
import fetchImages from "fetch-images";

let img = new Image();

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Edvard_Munch_-_The_dance_of_life_%281899-1900%29.jpg/1920px-Edvard_Munch_-_The_dance_of_life_%281899-1900%29.jpg",
  img
];

const failImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg",
  'blah'
];

fetchImages(images)
  .then(values => {
    values.map(value => console.log(value));
  })
.catch(err => console.log(err));

fetchImages(failImages)
  .then(values => {
    values.map(value => console.lol(value));
  })
.catch(err => console.log(err));

img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg";
```