var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'exemple_htmlcss')));
app.use(require('stylus').middleware(__dirname + '/exemple_htmlcss'));
app.listen(process.argv[2]);