// importation du shemas de la db task.js
const Task = require('../models/task')
//fin de l'importation 


exports.createTask = (req, res, next) => {
    const {title, description} = req.body
    // create the new task
    const task = new Task({
        title : title,
        description : description
    })
    
    // save the new  task in db 
    task.save()
    .then(()=> res.status(201).json({message : " nouvelle tache enregistrée avec succées !"}))
    .catch(error => res.status(401).json({error}))
}

exports.getAllTask = (req, res, next) => {
    // research the task in db
    Task.find()
      .then(tasks => res.status(200).json({tasks}))
      .catch(error => res.status(400).json({error}))
}

exports.getOneTask = (req, res, next) => {
    // research the one  task in db
    Task.findOne({_id : req.params.id })
    .then(task => res.status(200).json({task}))
    .catch(error => res.status(401).json({error}))      
}

exports.modifyTask = (req, res, next) => {
    // to  update a one task 
    Task.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
    .then(()=> res.status(200).json({message: "votre tache a été bien modifier !"}))
    .catch(error => res.status(400).json({error}))
}

exports.deleteOneTask = (req, res, next) => {
    //to delete a one task
    Task.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message : " votre tache est bien suprimé  !"}))
    .catch(error => res.status(400).json({error}))
}