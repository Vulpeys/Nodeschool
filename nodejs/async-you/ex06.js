const {reduce} = require ('async');
const http = require('http');

reduce(['one', 'two', 'three'], 0, (memo, number, cb) => {
    http.get(`${process.argv[2]}?number=${number}`, (res) => {
      res.on('data', chunk => memo += Number(chunk))
      res.on('end', () => cb(null, memo))
    }).on('error', err => console.error(err))
  
  }, (err, result) => {
    if (err) console.error(err)
    console.log(result)
  })