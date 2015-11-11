var group = require('./index.js');
group('.', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data.fileTypes);
		console.log(data.fileNames);
	}
});
