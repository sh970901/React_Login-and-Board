const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())



app.get('/api/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send('hh');
})
app.post('/api/login',(request,response)=>{
    response.header("Access-Control-Allow-Origin", "*");
    console.log(request.body)
})
app.listen(port, (req,res)=>{
    console.log("서버 작동")
})