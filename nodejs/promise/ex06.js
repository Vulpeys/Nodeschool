'use strict'

const promise = Promise.resolve("RESOLVE");

const testcatch = new Promise (function (fulfill, reject){
    fulfill("yep yep");
    reject("cacacul");
});

testcatch.catch(function(err){
   (console.log(reject));
})