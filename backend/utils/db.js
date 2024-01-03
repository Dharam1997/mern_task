import mysql from 'mysql2'

const con = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: '12345',
    database: 'world',
    port: 3306
})

con.connect(function(err) {
    if(err) {
        console.log("connection error", err)
    } else {
        console.log("Connected")
    }
})

export default con;

