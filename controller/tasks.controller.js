const express = require("express")

router = express.Router()

const service = require("../services/tasks.service")


// http://localhost:3000/todo-api/tasks/

// Get all Tasks
router.get('/', async (req, res) => {
    const tasks = await service.getAllTasks() 
    res.send(tasks) 
}) 

// Get Task by title
router.get('/:title', async (req, res) => {
    const task = await service.getTaskByTitle(req.params.title)
    if (task.length == 0){
        res.status(404).json("No task with given title : " + req.params.title)
    }
    else
        res.send(task)
}) 

// Add task
router.post('/', async (req, res) => {
    const result = await service.addTask(req.body)
    res.status(200).send("Task successfully added")
    res.send(result)
}) 

// Update Task
router.put('/:title', async (req, res) => {
    await service.updateTask(req.body, req.params.title)
    res.status(200).send("Task successfully updated")
})

// Delete all completed Tasks
router.delete('/', async (req, res) => {
    await service.deleteCompletedTasks()
    res.status(200).send("Tasks successfully deleted")
}) 

// Delete Task by title
router.delete('/:title', async (req, res) => {
    await service.deleteTask(req.params.title)
    res.status(200).send("Task successfully deleted")
}) 

module.exports = router;