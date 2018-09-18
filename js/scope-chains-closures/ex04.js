/*function foo () {
	const bar = function zip(){
		const quux = 2;
	}
	let quux = 3;
}*/
function foo () {
	quux = 3;
	let bar = function zip(){
		bar = true;
		const quux = 2;
	}
	return zip();
}
