const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getBookings,
  createBooking, // จากโค้ดเดิมของคุณ
  updateBooking,
  deleteBooking
} = require('../controllers/booking');

router.route('/')
  .get(protect, getBookings)
  .post(protect, createBooking);

router.route('/:id')
  .put(protect, updateBooking)
  .delete(protect, deleteBooking);

module.exports = router;