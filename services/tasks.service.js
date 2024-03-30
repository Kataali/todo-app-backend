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

module.exports.addTask = async(obj) => {
    const response = await db.query("INSERT INTO tasks VALUES (?, ?, ?, curdate())", [obj.title, obj.isDone, obj.category])
        .catch(e => console.log(e))
        return response;
}

module.exports.updateTask = async(obj, title) => {
    const response = await db.query("UPDATE tasks SET title = ? WHERE title = ?", [obj.title, title])
        .catch(e => console.log(e))
        return response;
}

module.exports.deleteTask = async(title) => {
    const response = await db.query("DELETE FROM tasks WHERE title = ?", [title])
        .catch(e => console.log(e))
        return response;
}

module.exports.deleteCompletedTasks = async() => {
    const response = await db.query("DELETE FROM tasks WHERE isDone = 1")
        .catch(e => console.log(e))
        return response;
}