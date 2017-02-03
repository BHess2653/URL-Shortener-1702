var linkGen = require('../shortUrl');

module.exports = (express) => {
  var router = express.Router();

  router.get('/', (req, res) => {
    res.json({ Hello: 'World' });
  });

  return router;
};
