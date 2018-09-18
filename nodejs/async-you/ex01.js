const http = require('http');
const async = require ('async');
const fs = require ('fs');
const file = process.argv[2];

const readFilecontents = (cb) => {
    fs.readFile(file, 'utf8', cb)
}


function fetchURL(url, cb) {
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

  async.waterfall([
      readFilecontents,
      fetchURL
  ], (err, results) => {
      if(err) return console.error(err);
      console.log(results);
  })