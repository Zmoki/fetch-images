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
  })
});


describe('fetchImages resolve: ', () => {
  describe('when args contain single real image url', () => {
    it('return array', () => {
      return fetchImages([getImageUrl()]).should.to.eventually.be.a('array');
    });
    it('return array with HTMLImageElement', () => {
      return fetchImages([getImageUrl()]).should.to.eventually.have.deep.property('[0][0]')
        .that.is.an.instanceOf(HTMLImageElement);
    });
  });
});