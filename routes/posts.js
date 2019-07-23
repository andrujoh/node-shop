const router = require('express').Router();
const { asyncErrorHandler } = require('../middleware');
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDelete
} = require('../controllers/posts');

router
  .route('/')
  .get(asyncErrorHandler(postIndex))
  .post(asyncErrorHandler(postCreate));

router.get('/new', asyncErrorHandler(postNew));

router
  .route('/:id')
  .get(asyncErrorHandler(postShow))
  .put(asyncErrorHandler(postUpdate))
  .delete(asyncErrorHandler(postDelete));

router.get('/:id/edit', asyncErrorHandler(postEdit));

module.exports = router;
