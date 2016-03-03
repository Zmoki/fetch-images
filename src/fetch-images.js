function fetchImages() {
  return new Promise((resolve, reject) => {
    let images;

    const args = Array.from(arguments);
    if(args.length === 1 && Array.isArray(args[0])) {
      images = args[0];
    } else {
      images = args;
    }

    if(!images || !Array.isArray(images) || !images.length) {
      reject('Images is not defined.');
    }

    const promises = [];

    images.forEach(image => {
      promises.push(new Promise((innerResolve, innerReject) => {
        const isHTMLImageElement = image instanceof HTMLImageElement;

        if(!isHTMLImageElement && (typeof image != 'string')) {
          innerReject(`${image} is not image.`);
        }

        if(isHTMLImageElement && image.complete) {
          innerResolve([img, 'completed']);
        }

        let img = isHTMLImageElement ? image : new Image();

        img.addEventListener('load', () => {
          innerResolve([img, 'completed']);
        });

        img.addEventListener('error', () => {
          innerReject(`Error while load ${image}.`);
        });

        img.addEventListener('abort', () => {
          innerReject(`Abort loading ${image}.`);
        });

        if(!isHTMLImageElement) {
          img.src = image;
        }
      }));
    });

    Promise.all(promises)
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

export default fetchImages;