var notesApplication = require('../index');
var expect = require('chai').expect;
var myNotes = new notesApplication('bimbo');

    describe("Adding notes to note taking application", function() {
    
	   it ("should return error for a number input", function(){
		//var myNotes.create(note_content); 
		   expect(myNotes.create(1)).to.equal('Note content must be a string');
	   });

	   it ("should return success for a string input", function(){
			expect(myNotes.create('hello')).to.equal('Success');
	   });

    });


