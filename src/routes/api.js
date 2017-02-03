var linkGen = require('../shortURL');

module.exports = (express) => {
  var router = express.Router();

  router.get('/', (req, res) => {
    res.json({ Hello: 'World' });
  });

  router.get('/status', (req, res) => {
    res.json({ Status: 'True' });
  });

  router.get('/url', (req, res) => {
    res.json(linkGen.short(req.body.urlLink));
  });

  return router;
};
