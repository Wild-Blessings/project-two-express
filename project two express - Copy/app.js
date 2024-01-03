const path = require('path');
const express = require('express');
const app = express();

// middleware here
app.use(express.static('public'))


// test 
app.get('/test',function(req,res){
  res.statusCode = 200;
  res.send('<h1> testing </h>')
})


app.get('/',function(req,res){
  const htmlPathFile = path.join(__dirname,'views','yegoti-clock.html');
  res.sendFile(htmlPathFile)
})


app.listen(2000)