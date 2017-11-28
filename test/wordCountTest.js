var chai = require("chai");
var expect = chai.expect;
var fs = require("fs");
var WordCount = require("../src/wordCount");
var {getData, storeData, formatData} = require("../src/getData")

describe("WordCount", function(){

	beforeEach(function(){
		wordCount = new WordCount();
	})

	it("starts with an empty array", function(){
		expect(wordCount.words).to.be.empty;
	})

	it("starts with an empty object", function(){
		expect(wordCount.counted).to.be.empty;
	})

	it("given a file, it returns a list of words", function(){
		wordCount.pushWords("public/input-test");
		expect(wordCount.words).to.eql(["THIS", "FILE", "IS", "A", "TEST", "BECAUSE", "IT", "IS", "A", "TEST"])
	})

	it("given a file, it returns an object with words and counters", function(){
		wordCount.pushWords("public/input-test");
		wordCount.countWords();
		expect(wordCount.counted).to.eql({"THIS": 1, "FILE": 1, "IS": 2, "A": 2, "TEST": 2, "BECAUSE": 1, "IT": 1})
	})

	it("given a file, it returns an object with words, counters and it checks if the number is prime", function() {
      wordCount.pushWords("public/input-test");
			wordCount.countWords();
      wordCount.formattedText();
      expect(wordCount.counted).to.eql({ THIS: { count: 1, prime: false },
                                     FILE: { count: 1, prime: false },
                                     IS: { count: 2, prime: true },
                                     A: { count: 2, prime: true },
                                     TEST: { count: 2, prime: true },
                                     BECAUSE: { count: 1, prime: false },
                                     IT: { count: 1, prime: false } });
  });

})