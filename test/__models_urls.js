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
});
