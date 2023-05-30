const express = require('express')
const router = express.Router()


router.get('/',(request,response)=>{
    response.send("Displaying all the students");
})
router.post('/',(request,response)=>{
    response.send("Adding new students")
})
router.patch('/:id',(request,response)=>{
    response.send(`Updating student id ${request.params.id}`)
})
router.delete('/:id',(request,response)=>{
    response.send(`Deleting student id ${request.params.id}`)
})
module.exports = router