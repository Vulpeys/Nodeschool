'use strict'

const alwaysThrows = () => {
    throw new Error(`OH NOES`)
};

const iterate = i => {
    console.log(i)
    return i + 1;
}

const onReject =  err => console.log(err.message);

Promise.resolve(iterate(1))
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .then (alwaysThrows)
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .catch (onReject)