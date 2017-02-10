const urls = require('../../models/urls');

module.exports = (express) => {
    const router = express.Router();

    // Redirect router
    router.get('/:shortUrl', (req, res) => {
        req.body.shortUrl = req.params.shortUrl;
        urls.go(req.body,
            (err) => { // errorCallback
                res.status(500).json(err);
            },
            (data) => { // successCallback
                res.redirect(data.origUrl);
            });
    });

    return router;
};
