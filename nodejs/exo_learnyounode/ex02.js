const result = process.argv.slice(2).reduce((tmp, add) => Number(tmp) + Number(add));

/*for (viar i = 2; i < process.argv.length; i++){
	result += Number(process.argv[i]);
}*/

console.log(result);
