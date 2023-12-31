const express = require('express')
const router = express.Router()
// import the controler file task.js
const ctrls = require('../controllers/task')
// end import file controler file 

router.post('/', ctrls.createTask)
router.get('/', ctrls.getAllTask)
router.get('/:id', ctrls.getOneTask)
router.put('/:id', ctrls.modifyTask)
router.delete('/:id', ctrls.deleteOneTask)

module.exports = router