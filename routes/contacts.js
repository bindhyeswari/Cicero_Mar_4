var router = require('express').Router();

router.get('/', function (req, res) {
    if (req.headers.accept.indexOf('application/json') !== -1) {
        res.status(200).json([{name: 'Chen Chao Wei'}, {name: 'Jahara'}]);
    } else {
        res.status(200).render('contacts');
    }
});

module.exports = router;