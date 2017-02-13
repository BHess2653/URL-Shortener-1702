const expect = require('chai').expect;
const url = require('../src/models/urls');
const gen = require('../src/models/urlGen');
const util = require('../lib/util');

describe('Urls Model', () => {
  let fakeUrl = {
    origUrl: 'http://www.google.com/',
    shortUrl: gen.shortUrl('http://www.google.com/'),
  };
  let fakeId;
  let shortUrl;

  // Creates Url
  it('Create Url', (done) => {
    url.add(fakeUrl, (fail) => {
      util.debug('Failed to create fake Url');
    }, (url) => {
      fakeId = url.id;
      shortUrl = url.shortUrl;
      expect(url.url).to.be.equal(fakeUrl.url);
      expect(url.shortUrl).to.be.equal(fakeUrl.shortUrl);
      done();
    });
  });

  // Get all Urls
  it('Get all Urls', (done) => {
    url.all((fail) => {
      util.debug('Failed to get all Urls ', fail);
    }, (urls) => {
      this.fakeUrl = urls;
      expect(this.fakeUrl.length).to.be.above(0);
      done();
    });
  });
});
