var chai = require('chai');
var expect = chai.expect;
var WordCount = require('../src/wordCount');

describe("WordCount", function(){

	beforeEach(function(){
		count = new WordCount();
	})

	it("works", function(){
		expect(count.words).to.be.empty;
	})
	
})
