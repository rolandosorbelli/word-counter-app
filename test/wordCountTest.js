var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
const mock = require('mock-fs');
const {getData, storeData, formatData} = require('../src/getData')
var WordCount = require('../src/wordCount');

describe("WordCount", function(){

	beforeEach(function(){
		count = new WordCount();
		count2 = new WordCount();
	})

	it("starts with an empty array", function(){
		expect(count.words).to.be.empty;
	})

	it("given a file, it returns a list of words", function(){
	})
	
})
