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
  let shortURL;

  // Creates Url
  it('Create Url', (done) => {
    url.add(fakeUrl, (fail) => {
      util.debug('Failed to create fake Url');
    }, (url) => {
      fakeId = url.id;
      shortURL = url.shortUrl;
      expect(url.url).to.be.equal(fakeUrl.url);
      expect(url.shortUrl).to.be.equal(fakeUrl.shortURL);
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

  // Get Url by id
  it('Create Url', (done) => {
    const fakeUrl = {
      id: fakeId,
    };
    url.one(fakeUrl, (fail) => {
      util.debug('Failed to get Url by id ', fail);
    }, (url) => {
      expect(url.id).to.be.equal(fakeId);
      done();
    });
  });

  // Update Url
  it('Update Url', (done) => {
    fakeUrl = {
      id: fakeId,
      origUrl: 'http://www.reddit.com/',
      shortUrl: gen.shortUrl('http://www.reddit.com/'),
    };
    url.update(fakeUrl, (fail) => {
      util.debug('Failed to update fake Url ', fail);
    }, (url) => {
      expect(url.dataValues.url).to.be.equal(fakeUrl.url);
      done();
    });
  });

  // Delete Url
  it('Delete Url', (done) => {
    url.remove(fakeUrl, (fail) => {
      util.debug('Failed to delete Url ', fail);
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    });
  });

  // Redirect
  it('Redirect', (done) => {
    const fakeUrl = {
      shortUrl: shortURL,
    };
    url.go(fakeUrl, (fail) => {
      util.debug('Failed to redirect ', fail);
    }, (url) => {
      expect(gen.shortUrl).to.be.equal(shortURL);
      done();
    });
  });
});
