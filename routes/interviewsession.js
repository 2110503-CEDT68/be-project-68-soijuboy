const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

const {
  getSessions,
  createSession,
  updateSession,
  deleteSession
} = require('../controllers/interviewsession');

router.route('/')
  .get(getSessions)
  .post(protect, authorize('admin'), createSession);

router.route('/:id')
  .put(protect, authorize('admin'), updateSession)
  .delete(protect, authorize('admin'), deleteSession);

module.exports = router;