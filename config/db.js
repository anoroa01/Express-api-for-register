require("dotenv").config()
const mongoose = require("mongoose")

const dbUrl = process.env.DB_URL

const connectDB = () => {
    mongoose.connect(dbUrl)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((e)=> {
        console.log("DB error: ", e)
    })
}


module.exports = {connectDB}