'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, cb) {
	fs.readdir(dirPath, function (err, files) {
		if (err) {
			throw new Error('directory does not exist');
		} else {
			var arr = [];
			var names = [];
			var dict = {};
			for (var p in files) {
				if (p) {
					var ext = path.extname(files[p]);
					if (ext !== '') {
						var fileName = path.basename(files[p], ext);
						arr.push(ext);
						names.push(fileName);
					}
				}
			}
			if (arr.length !== 0 && names.length !== 0) {
				dict = {
					fileTypes: arr,
					fileNames: names
				};
				cb(null, dict);
			} else {
				cb('directory contains no files');
			}
		}
	});
};

