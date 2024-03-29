const express = require("express")

router = express.Router()

const service = require("../services/tasks.service")


// http://localhost:3000/todo-api/tasks/
router.get('/', async (req, res) => {
    const tasks = await service.getAllTasks()
    res.send(tasks) 
}) 

router.get('/:title', async (req, res) => {
    const task = await service.getTaskByTitle(req.params.title)
    if (task.length == 0){
        res.status(404).json("No task with given title : " + req.params.title)
    }
    else
        res.send(task)
}) 

module.exports = router;