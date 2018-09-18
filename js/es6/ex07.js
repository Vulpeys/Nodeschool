/*module.exports = function average(...args){
    var result = 0;
    args.forEach(function (value){
        result += value;
    });
    return result / args.length;
};*/

module.exports = (...args) => {
    let result = args.reduce((acc, crvalue) => acc + crvalue, 0);
    return result / args.length;
};