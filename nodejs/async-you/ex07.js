const {whilst} = require('async');
const http = require('http');

let count = 0;
let response = '';

whilst(() => response.trim() != 'meerkat', (cb) => {
    let body = '';
    http.get(process.argv[2], (res) => {
        res.on('data', chunk => body += chunk.toString())
        res.on('end', () => {
            count++;
            response = body;
            cb(null, count)
        })
    })
},  (err) => {
    if (err) return console.error(err)
    console.log(count);
});