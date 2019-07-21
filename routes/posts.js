const router = require('express').Router();

router.get('/', (req, res, next) => {
  // res.render('posts', { title: 'Posts' });
  res.send('hey');
});

router.get('/new', (req, res, next) => {
  res.send('new');
});

router.post('/', (req, res, next) => {
  res.send('create');
});

router.get('/:id', (req, res, next) => {
  res.send('get id');
});

router.get('/:id/edit', (req, res, next) => {
  res.send('get id and edit');
});

router.put('/:id', (req, res, next) => {
  res.send('get id and put');
});

router.delete('/:id', (req, res, next) => {
  res.send('get id and delete');
});

module.exports = router;

// GET index /posts
// GET new /posts/new
// POST create /posts
// GET show /posts/:id
// GET edit /posts/:id/edit
// PUT update /posts/:id
// DELETE destroy /posts/:id
