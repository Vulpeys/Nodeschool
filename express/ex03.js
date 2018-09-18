var path = require('path')
var express = require('express');
var app = express();
var pug = require ('pug');

app.get('/home', function (req, res){
    res.render('index', {date: new Date().toDateString()})
})
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.listen(process.argv[2]);