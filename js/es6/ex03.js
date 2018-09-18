const inputs =  process.argv.slice(2);
const result =  inputs
                .map(x => x[0])
                .reduce((plus, tmp) => plus + tmp, '');
console.log(`[${inputs}] devient "${result}"`);