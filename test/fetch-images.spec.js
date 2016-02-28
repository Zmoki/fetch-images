import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fetchImages from '../src/fetch-images.js';

chai.use(chaiAsPromised);

const getImageUrl = () => {
  // Hash in the end to avoid browser caching images
  return 'http://lorempixel.com/1900/1900?h=' +
    Math.floor(Math.random() * 10000);
};

const testParams = {
  singleUrl: getImageUrl()
};

describe('fetchImages', () => {
  it('return promise', () => {
    expect(fetchImages(testParams.singleUrl) instanceof Promise).to.equal(true);
  })
});


describe('fetchImages resolve', () => {
  it('when params contain single real image url', () => {
    const params = testParams.singleUrl;

    expect(fetchImages(params)).to.eventually.be.a('array');
  })
});