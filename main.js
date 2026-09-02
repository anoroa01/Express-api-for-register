require("dotenv").config()
const express = require("express")
const { connectDB } = require("./config/db")
const dns = require("node:dns")
const { controlRegister } = require("./controllers/register")

dns.setServers(["8.8.8.8"])

const app = express()
app.use(express.json())
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send({
        "message": "Hello",
        "code": 200,
    })
})

app.post("/register", controlRegister)

app.listen(port, ()=> {
    console.log("Server is running on port:", port)
    connectDB();
})