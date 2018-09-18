'use strict';

const promise = new Promise (function time(fulfill, reject){
    //setTimeout(() => fulfill('ACCOMPLIE !'), 300);
    setTimeout(fulfill, 300, 'ACCOMPLIE !');
});
promise.then(console.log);