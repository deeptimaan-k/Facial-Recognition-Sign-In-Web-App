const Employee = require('../models/employee');
const faceRecognition = require('face-recognition-lib'); // Hypothetical face recognition library

// Add New Employee (With Face Embedding)
exports.addEmployee = async (req, res) => {
  const { name, email, faceEmbedding } = req.body;
  
  try {
    const newEmployee = new Employee({ name, email, faceEmbedding });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully', newEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error adding employee', error });
  }
};

// Employee Sign-In using Facial Recognition
exports.signInEmployee = async (req, res) => {
  const { faceEmbedding } = req.body;
  
  try {
    const employees = await Employee.find();
    const recognizedEmployee = faceRecognition.recognize(faceEmbedding, employees);

    if (recognizedEmployee) {
      recognizedEmployee.attendance.push({ status: 'Present' });
      await recognizedEmployee.save();
      res.json({ message: 'Sign-in successful', recognizedEmployee });
    } else {
      res.status(404).json({ message: 'Employee not recognized' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during sign-in', error });
  }
};

// Get All Attendance Records
exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Employee.find().select('name attendance');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance', error });
  }
};
