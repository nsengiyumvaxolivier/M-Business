require("dotenv").config();
const mysql = require('mysql');
const conn = mysql.createConnection({
    host:process.env.HOST_NAME,
    user:process.env.USER_NAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port: process.env.PORT,
})
module.exports=conn;