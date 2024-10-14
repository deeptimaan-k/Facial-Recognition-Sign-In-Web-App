const express = require('express');
const { addEmployee, signInEmployee, getAllAttendance } = require('../controllers/employeeController');
const router = express.Router();

// Route to add a new employee
router.post('/add', addEmployee);

// Route to handle employee sign-in (facial recognition)
router.post('/signin', signInEmployee);

// Get all attendance records
router.get('/attendance', getAllAttendance);

module.exports = router;
