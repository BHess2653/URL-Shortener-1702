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
