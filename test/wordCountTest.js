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

	it("starts with an empty object", function(){
		expect(count.counted).to.be.empty;
	})

	it("given a file, it returns a list of words", function(){
		count.pushWords("public/input-test");
		expect(count.words).to.eql(["THIS", "FILE", "IS", "A", "TEST", "BECAUSE", "IT", "IS", "A", "TEST"])
	})

	it("given a file, it returns an object with words and counters", function(){
		count.pushWords("public/input-test");
		count.countWords();
		expect(count.counted).to.eql({"THIS": 1, "FILE": 1, "IS": 2, "A": 2, "TEST": 2, "BECAUSE": 1, "IT": 1})
	})
})