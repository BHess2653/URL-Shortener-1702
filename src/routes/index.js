module.exports = (express) => {
    var router = express.Router();

    router.get('/', (req, res) => {
        res.json({
            Hello: 'World'
        });
    });

    router.get('/status', (req, res) => {
        res.json({
            Status: 'True'
        });
    });

    router.use('/api/v1', require('./api/urls')(express));
    router.use('/go/', require('./go/redirect')(express));

    return router;
};
