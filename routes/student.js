const express = require('express')
const router = express.Router()
const {getStudentDetails,addingStudentDetails,updateStudentDetails,deleteStudent,displayStudentByValue} = require('../controllers/student')
router.route('/').get(getStudentDetails).post(addingStudentDetails)
router.route('/:id').get(displayStudentByValue).patch(updateStudentDetails).delete(deleteStudent)
module.exports = router