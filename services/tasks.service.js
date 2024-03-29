const db = require('../db')

 module.exports.getAllTasks = async() => {
    const [data] = await db.query("SELECT * FROM tasks")
        .catch(e => console.log(e))
        return data;
}

module.exports.getTaskByTitle = async(title) => {
    const [data] = await db.query("SELECT * FROM tasks WHERE title = ?",[title])
        .catch(e => console.log(e))
        return data;
}