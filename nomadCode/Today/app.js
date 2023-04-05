var express = require('express');
var app = express();
var router = require('./nodejs/router/main')(app);
const cors = require('cors');
const port = 3000;
const USERNAME_KEY = "username";

app.use(cors());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));

var server = app.listen(port, function(){
    console.log("Express server has started on port 3000")
});

