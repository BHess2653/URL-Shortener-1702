const url = require('../../models/urls');
const gen = require('../../models/urlGen');

module.exports = (express) => {
  const router = express.Router();

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Create Url
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/urls', (req, res) => {
    const reqBody = req.body;
    reqBody.shortUrl = gen.shortUrl(url);
    url.add(req.body,
        (err) => { // errorCallback
          res.status(500).json(err);
        },
        (data) => { // successCallback
          res.status(200).json(data);
        });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Find All Urls
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/urls', (req, res) => {
    url.all(
        (err) => { // errorCallback
          res.status(500).json(err);
        },
        (data) => { // successCallback
          res.status(200).json(data);
        });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Find One Url by ID
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.one(req.body,
        (err) => { // errorCallback
          res.status(500).json(err);
        },
        (data) => { // successCallback
          res.status(200).json(data);
        });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Update Url by ID
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.update(req.body,
        (err) => { // errorCallback
          res.status(500).json(err);
        },
        (data) => { // successCallback
          res.status(200).json(data);
        });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Delete Url by ID
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.remove(req.body,
        (err) => { // errorCallback
          res.status(500).json(err);
        },
        (data) => { // successCallback
          res.status(200).json(data);
        });
  });

  return router;
};
