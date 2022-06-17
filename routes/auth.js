const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.send('this is sign-up page');
});

router.get('/login', (req, res) => {
    res.send('this is login page');
});

router.get('/logout', (req, res) => {
    res.send('this is logout page');
});

router.get('/delete', (req, res) => {
    res.send('this is delete page');
});

module.exports = router;

