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

router.get('/urls', (req, res) => {
  url.all(
    (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data);
    });
});

router.get('/urls/:id', (req,res) => {
  const reqBody = req.body;
  reqBody.id = req.params.id;
    url.one(req.body,
    (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data)
    });
});

router.post('/urls/:id', (req,res) => {
  const reqBody = req.body;
  reqBody.id = req.params.id;
    url.update(req.body,
    (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data)
    });
});

router.delete('/urls/:id', (req,res) => {
  const reqBody = req.body;
  reqBody.id = req.params.id;
    url.remove(req.body,
    (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data)
    });
});

return router;
};
