const url = require('../../models/urls');
const gen = require('../../models/urlGen');

module.exports = (express) => {
const router = express.Router();

router.post('/urls', (req,res) => {
  const reqBody = req.body;
  reqBody.shortUrl = gen.shortUrl(url);
  url.add(req.body,
  (err) => {
    res.status(500).json(err);
  },
  (data) => {
    res.status(200).json(data)
  });
});

return router;
};
