const http = require('http');
const {each} = require ('async');
//const fileOne = process.argv[2];
//const fileTwo = process.argv[3];

each((process.argv.slice(2)),
    (url, done) => {
        http.get(url, res => {
            res.on('end', () => done())
        }).on('error', err => done(err))
    },
    (err) => {
        if (err) console.error(err);
    }
);