const db = require('./db');

exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
};

exports.all = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

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
};

exports.update = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(data).then(success).catch(err);
  }).catch(err);
};

exports.remove = (data, err, success) => {
  db.url.destroy({
    where: {
      shortUrl: data.shortUrl,
    },
  }).then(success).catch(err);
};
