'use strict'

const promise = new Promise (function (fulfill, reject){
    fulfill("VALEUR DE LA PROMESSE");
});

promise.then(console.log);

console.log("PROGRAMME PRINCIPAL");