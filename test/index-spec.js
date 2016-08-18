
var chai = require('chai');
var assert = chai.assert;
var myNotes = require('../index');

describe ("create functon", function() {

	it ("should return an error when a number is entered", function(){
		var myCreate = new NotesApplication(1)
		assert(create(1)).to.equal('Numbers are not valid input');
	});
});