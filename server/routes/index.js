var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('product', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

module.exports = router;
