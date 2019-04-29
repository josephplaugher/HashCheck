const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

let port = process.env.PORT;
app.listen(port, function(){
  var msg = 'server started in '+ process.env.NODE_ENV + ' mode on port ' + port;
  if(process.env.NODE_ENV !== 'production') {
    console.log(msg)
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
  res.set("X-Powered-By", "Appreciate Corporations");
  next();
});

app.all('*', (req, res) => {
  res.render('index');
});