const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const mysql = require('mysql');
const fs = require('fs');


const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/login',(req,res)=>{
    connection.query('SELECT * FROM addlogin', function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.get('/api/login/email',(req,res)=>{
    connection.query('SELECT Email FROM addlogin', function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})



app.get('/api/login/id',(req,res)=>{
    connection.query('SELECT ID FROM addlogin', function(err,rows,fields){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows)
    })
})
app.post('/api/login/id',(req,res)=>{
    console.log(req.body)
    res.send("gg")
    
})
app.post('/api/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let sql = 'INSERT INTO loginprac.addlogin VALUES (?,?,?)';
    let ID = req.body.id
    let PW = req.body.password
    let Email = req.body.email
    let params = [ID, PW, Email]
    connection.query(sql, params,
        (err, rows, fields) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(rows);
          console.log(err)
          console.log(rows)
    })
    
})
app.get('/api/board',(req,res)=>{
    connection.query('SELECT * FROM board', function (error, rows, fields) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows);
      })
})
app.post('/api/board', (req,res)=>{
    let sql = 'INSERT INTO board VALUES (null,?,?,now(),?)';
    let title = req.body.title;
    let content = req.body.content;
    let writer = req.body.writer;
    let params = [title,content,writer]
    console.log(req.body)
    connection.query(sql, params, (err,rows,fields)=>{
        res.header("Access-Control-Allow-Origin", "*")
        res.send(rows);
    })
})


app.listen(port, (req,res)=>{
    console.log("서버 작동")
})