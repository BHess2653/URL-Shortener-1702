const urls = require('../../models/urls');

module.exports = (express) => {
  const router = express.Router();

  router.get('/:shortUrl', (req, res) => {
    req.body.shortUrl = req.params.shortUrl;
    urls.go(req.body,
    (err) => {
      res.status(500).json(err);
    },
  (data) => {
    res.redirect(data.origUrl);
  });
});

  return router;
};
