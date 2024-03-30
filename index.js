const express = require("express")
const bodyparser = require("body-parser")
const db = require("./db")
const app = express()
tasksRoute = require("./controller/tasks.controller")

// middleware
    // Make Use of the body-parser package
app.use(bodyparser.json())

app.use('/todo-api/tasks', tasksRoute)
    //Global Error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status||500).send("OOPS!!Something went wrong!")
})


// To Check if the database is actually connected or not since there is no way of checking before creating the pool
db.query("Select 1")
.then(() => {console.log("DB connection successful")
    // Start server
    app.listen(3000, 
        () => console.log("todo_app express server started at port 3000"))
})
.catch(e => console.log(e + "DB connection unsuccessful"))


