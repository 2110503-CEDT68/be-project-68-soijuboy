const express = require('express');
const {register, login, getMe, logout} = require('../controllers/auth'); // 1. เพิ่ม logout ตรงนี้

const router = express.Router();

const {protect} = require('../middleware/auth');
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', logout); // 2. เพิ่มบรรทัดนี้

module.exports = router;