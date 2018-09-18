var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
  if (!err) {
    for (var i=0; i<list.length; i++){
      if (list[i].split('.')[1] == process.argv[3]){
        console.log(list[i]);
      }
    }
  } else {
    throw err;
  }
});

/*var fs = require ('fs');
var path = require ('path');

const buffer = fs.readdir(process.argv[2], 'utf8', function (err, list){
	if (!err){
		console.log(list.filter(list => (process.argv[3])));}
	else{
		throw err;
	}
});*/
