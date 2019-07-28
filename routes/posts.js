const router = require('express').Router();
const { asyncErrorHandler } = require('../middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
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
  .post(upload.array('images', 4), asyncErrorHandler(postCreate));

router.get('/new', asyncErrorHandler(postNew));

router
  .route('/:id')
  .get(asyncErrorHandler(postShow))
  .put(upload.array('images', 4), asyncErrorHandler(postUpdate))
  .delete(asyncErrorHandler(postDelete));

router.get('/:id/edit', asyncErrorHandler(postEdit));

module.exports = router;
