'use strict'

const parsePromised = json => new Promise ((fulfill, reject) =>{
    try{
        fulfill(JSON.parse(json));
    }catch (err){
        reject(err);
    }
});

function onReject(error){
    console.log(error.message);
}

parsePromised(process.argv[2])
    .then(null, onReject);