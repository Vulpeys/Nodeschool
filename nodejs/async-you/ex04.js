'use strict'

const http = require ('http');
const {map} = require ('async');

/*function getUrl(url, cb) {
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
  }*/

map((process.argv.slice(2)),
    (url, cb) => {
        let data = '';
        http.get(url, res => {
            res.on('data', chunk => data += chunk.toString());
            res.on('end', () => cb(null, data));
        })  .on('error', err => cb(done));
    },
    (err, results) => {
        if (err) console.log(err);
        console.log(results);
    }
);