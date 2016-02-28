function fetchImages(images) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.addEventListener('load', () => {
      resolve([
        [img, 'completed']
      ]);
    });

    img.addEventListener('error', () => {
      reject(img.src);
    });

    img.src = images[0];
  });
}

export default fetchImages;