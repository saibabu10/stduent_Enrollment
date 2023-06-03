const express = require('express')
const router = express.Router()
const {getStudentDetails,addingStudentDetails,updateStudentDetails,deleteStudent,displayStudentByValue,getStudent} = require('../controllers/student')
router.route('/').get(getStudentDetails).post(addingStudentDetails)
router.route('/:id').get(getStudent,displayStudentByValue).patch(getStudent,updateStudentDetails).delete(getStudent,deleteStudent)

module.exports = router