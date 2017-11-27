var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var WordCount = require('../src/wordCount');
const {getData, storeData, formatData} = require('../src/getData')

describe("WordCount", function(){

	beforeEach(function(){
		count = new WordCount();
	})

	it("starts with an empty array", function(){
		expect(count.words).to.be.empty;
	})

	it("given a file, it returns a list of words", function(){
		count.pushWords("test/input-test");
		expect(count.words).to.eql(["THIS", "FILE", "IS", "A", "TEST", "BECAUSE", "IT", "IS", "A", "TEST"])
	})
	
})
