var should = require('should');
var ftype = require('./index.js');
describe('tests for getting file types', function () {
	it('give current dir', function() {
		ftype('.', function(dict) {
			dict.should.have.property('fileTypes').with.lengthOf(6);
		});
	});
})