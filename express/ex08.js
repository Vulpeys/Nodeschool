var express = require('express');
var app = express();
var fs = require('fs');

var str = JSON.parse(fs.readFileSync(process.argv[3]).toString())
app.get('/books', function (req, res){
    res.send(str)
});
app.listen(process.argv[2]);