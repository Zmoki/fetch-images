import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fetchImages from '../src/fetch-images.js';

chai.use(chaiAsPromised);
chai.should();

const getImageUrl = () => {
  // Hash in the end to avoid browser caching images
  return 'http://lorempixel.com/1900/1900?h=' +
    Math.floor(Math.random() * 10000);
};

describe('fetchImages', () => {
  it('return promise', () => {
    fetchImages().should.to.be.an.instanceOf(Promise);
  });
});

describe('fetchImages to be rejected', () => {
  describe('with an Error', () => {
    it('if args is not defined', () => {
      return fetchImages().should.to.eventually.be.rejectedWith('Images is not defined.');
    });

    it('if args is empty', () => {
      return fetchImages([]).should.to.eventually.be.rejectedWith('Images is not defined.');
    });

    it('if args is not array', () => {
      return fetchImages('blah').should.to.eventually.be.rejectedWith('Images is not defined.');
    });
  });
  it('if images contain bad url', () => {
    const images = [
      getImageUrl(),
      'blah',
      getImageUrl()
    ];
    return fetchImages(images).should.to.eventually.be.rejectedWith('Error while load blah.');
  });
});

describe('fetchImages to be resolved', () => {
  describe('when args contain single real image url', () => {
    it('with array', () => {
      return fetchImages([getImageUrl()]).should.to.eventually.be.an('array');
    });
    it('with array with HTMLImageElement', () => {
      return fetchImages([getImageUrl()]).should.to.eventually.have.deep.property('[0][0]')
        .that.is.an.instanceOf(HTMLImageElement);
    });
    it('with array with status', () => {
      return fetchImages([getImageUrl()]).should.to.eventually.have.deep.property('[0][1]')
        .that.is.equal('completed');
    });
  });

  it('when args contain few links', () => {
    const images = [
      getImageUrl(),
      getImageUrl()
    ];
    const result = fetchImages(images);

    result.then(values => console.log(values));

    return result.should.to.eventually.be.an('array');
  });

  it('when args contain few links and few HTMLImageElement', () => {
    let img1 = new Image();
    img1.src = getImageUrl();
    let img2 = new Image();

    const images = [
      getImageUrl(),
      img1,
      getImageUrl(),
      img2
    ];

    const result = fetchImages(images);

    result.then(values => console.log(values));

    img2.src = getImageUrl();

    return result.should.to.eventually.be.an('array');
  });
});