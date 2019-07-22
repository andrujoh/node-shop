const router = require('express').Router({ mergeParams: true });

router.get('/', (req, res, next) => {
  // res.render('reviews', { title: 'Posts' });
  res.send('hey reviews');
});

router.get('/new', (req, res, next) => {
  res.send('new');
});

router.post('/', (req, res, next) => {
  res.send('create');
});

router.get('/:review_id', (req, res, next) => {
  res.send('get review id');
});

router.get('/:review_id/edit', (req, res, next) => {
  res.send('get review id and edit');
});

router.put('/:review_id', (req, res, next) => {
  res.send('get review id and put');
});

router.delete('/:review_id', (req, res, next) => {
  res.send('get review id and delete');
});

module.exports = router;

// GET index /reviews
// GET new /reviews/new
// POST create /reviews
// GET show /reviews/:id
// GET edit /reviews/:id/edit
// PUT update /reviews/:id
// DELETE destroy /reviews/:id
