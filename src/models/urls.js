const util = require('../../lib/util');
const db = require('./db');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Add Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
  util.debug('Url was Added from Models ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// All Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.all = (err, success) => {
  db.url.findAll().then(success).catch(err);
  util.debug('Urls found from Models ');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// One Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.one = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('Url found in Models ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Update Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.update = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(data).then(success).catch(err);
  }).catch(err);
  util.debug('Url Updated from Models ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Remove Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.remove = (data, err, success) => {
  db.url.destroy({
    where: {
      shortUrl: data.shortUrl,
    },
  }).then(success).catch(err);
  util.debug('Url Removed from Models ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Redirect Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.go = (data, err, success) => {
  db.url.find({
    where: {
      shortUrl: data.shortUrl,
    },
  }).then(success).catch(err);
  util.debug('shortUrl found in Models ', data);
};
