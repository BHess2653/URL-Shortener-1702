const db = require('./db');

exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
};
