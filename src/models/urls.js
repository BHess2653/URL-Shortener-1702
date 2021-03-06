const utool = require('utiltool');
const db = require('./db');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Add Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
  utool.debug('Url was ' + 'Added'.create + ' from Models ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// All Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.all = (err, success) => {
  db.url.findAll().then(success).catch(err);
  utool.debug('Urls found from Models ');
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
  utool.debug('Url ' + 'found'.read + ' in Models ', data);
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
  utool.debug('Url ' + 'Updated'.update + ' from Models ', data);
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
  utool.debug('Url ' + 'Removed'.delete + ' from Models ', data);
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
  utool.debug('shortUrl ' + 'found'.read + ' in Models ', data);
};
