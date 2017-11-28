var chai = require("chai");
var expect = chai.expect;
var WordCount = require("../src/wordCount");
var {getData, storeData, formatData} = require("../src/getData")

describe("getData", function(){

	it("checks that data are loaded correctly", function(){
		data = getData("input-test")
		expect(data).to.equal("./input-test.txt")
	});

	it("returns an array of strings", function() {
		data = formatData("public/input-test");
		expect(data).to.eql([ "THIS", "FILE", "IS", "A", "TEST", "BECAUSE", "IT", "IS", "A", "TEST" ]);
	});
});