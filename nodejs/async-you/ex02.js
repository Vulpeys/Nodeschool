const http = require('http');
const {series} = require ('async');
const fileOne = process.argv[2];
const fileTwo = process.argv[3];

function getUrl(url, cb) {
    var body = '';
    http.get(url, function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        cb(null, body);
      });
    }).on('error', function(err) {
      cb(err);
    });
  }

series({
    requestOne: cb => getUrl(fileOne, cb),
    requestTwo: cb => getUrl(fileTwo, cb)
}, (err,results) => {
    if (err) return console.error(err);
    console.log(results);
});