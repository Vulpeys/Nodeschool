'use strict'

const http = require ('http'),
    {times} = require('async');

const [hostname, port] = process.argv.slice(2);

const addUser = (user_id, cb) =>{
    const postData = JSON.stringify({user_id})
    const options = {
        hostname,
        port,
        method : 'POST',
        path : '/users/create'
    }
    const req = http.request(options, (res) => {
        res.on('data', (chunk) => chunk)
        res.on('end', () => cb())
    })
    req.write(postData);
    req.end();
}

const getUsers = (cb) => {
    const options = {
      hostname,
      port,
      path: '/users'
    }
    http.get(options, (res) => {
      let body = ''
      res.on('data', chunk => body += chunk.toString())
      res.on('end', () => cb(body))
    }).on('error', err => console.error(err))
}

times(5, (n, next) =>{
    addUser(++n, next);
},  (err) => {
        if(err) console.error(err);
        getUsers(users => console.log(users))
    }
)