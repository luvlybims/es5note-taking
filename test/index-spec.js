
var chai = require('chai');
var expect = chai.expect;
var notesApp = require('../index');
var myNotes = new notesApp('bimbo');


describe ("How each function should work", function() {
    
	it ("create function should take string as input", function(){
		//myNotes.create(note_content);
		expect(myNotes.create('hello')).toEqual('hello', 'Success');
	});

});

