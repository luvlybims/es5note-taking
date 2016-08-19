
var chai = require('chai');
var expect = chai.expect;
var noteBook = require('../index');
var myNotes = new noteBook('bimbo');


describe ("Testing all functions", function() {
    
	it ("should return an error when a number is entered", function(){
		
		expect(myNotes.create('hello')).to.equal('success')
	});

	it ("should return an error when empty note is entered", function(){
		
		expect(myNotes.create('')).to.equal('cannot enter empty note')
	});
});

