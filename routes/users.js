const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers');
const { errorHandler } = require('../middleware');

/* GET users listing. */
router.get('/register', (req, res, next) => {
  res.send('get /register');
});

router.post('/register', errorHandler(postRegister));

router.get('/login', (req, res, next) => {
  res.send('get /login');
});

router.post('/login', (req, res, next) => {
  res.send('post /login');
});

router.get('/profile', (req, res, next) => {
  res.send('get /profile');
});

router.put('/profile/:user_id', (req, res, next) => {
  res.send('put /profile/:user_id');
});

router.get('/forgot', (req, res, next) => {
  res.send('get /forgot');
});

router.put('/forgot', (req, res, next) => {
  res.send('put /forgot');
});

router.get('/reset/:token', (req, res, next) => {
  res.send('get /reset/:token  ');
});
router.put('/reset/:token', (req, res, next) => {
  res.send('put /reset/:token  ');
});

module.exports = router;
