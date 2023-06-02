const {request} = require('express')
const studentModel = require('../models/student')
const getStudentDetails = async(request,response)=>{
    try{
    const student = await studentModel.find()
    response.status(200).json(student);
    }
    catch(error){
        console.log(error)
        response.status(500).json({message:error.message})
    }
}
const addingStudentDetails =  async(request,response)=>{

    const newStudent =  new studentModel({
        name: request.body.name,
        enrolledDepartment: request.body.enrolledDepartment,
        enrollmentDate: request.body.enrollmentDate
    })
    try{
        const student = await newStudent.save();
        response.status(200).json(student)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}
const updateStudentDetails = async(request,response)=>{
    if(request.body.name != null){
        response.student.name = request.body.name
    }
    if(request.body.enrolledDepartment != null){
        response.student.enrolledDepartment = request.body.enrolledDepartment
    }
    if(request.body.enrollmentDate != null){
        response.student.enrollmentDate = request.body.enrollmentDate
    }
    try{
        const updatedStudent = await response.student.save()
        response.status(200).json({updatedStudent})
    }
    catch(error){
        response.status(401).json({message:error.message})
    }
    }
const deleteStudent = async(request,response)=>{
    try{
        await response.student.deleteOne()
        response.status(200).json({message:`Deleted the User ${response.student.name}`})
    }catch(error){
        response.status(401).json({message:error.message})

    }
}
const displayStudentByValue = async(request,response)=>{
if(request.body.name != null){
    response.student.name = request.body.name
}
if(request.body.enrolledDepartment != null){
    response.student.enrolledDepartment = request.body.enrolledDepartment
}
if(request.body.enrollmentDate != null){
    response.student.enrollmentDate = request.body.enrollmentDate
}
try{
    const updatedStudent = await response.student.save()
    response.status(200).json({updatedStudent})
}
catch(error){
    response.status(401).json({message:error.message})
}
}

async function getStudent(request,response,next){
    let student 
    try{
       student = await studentModel.findById(request.params.id)
       if(student===null){
return response.status(404).json({Message:`cannot find user id ${request.param.id}`})
       }
    }
    catch(error){
      return response.status(500).json({message:error.message})
    }
    response.student = student
    next()

}
module.exports = {getStudentDetails,
    addingStudentDetails,
    updateStudentDetails,
    deleteStudent,
    displayStudentByValue,
    getStudent}