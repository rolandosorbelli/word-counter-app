var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var WordCount = require('../src/wordCount');
const {getData, storeData, formatData} = require('../src/getData')

describe("getData", function(){

	it("checks that data are loaded correctly", function(){
		data = getData("input-test")
		expect(data).to.equal("./input-test.txt")
	});

	it('returns an array', function() {
		data = formatData('test/input-test');
		expect(data).to.eql([ "THIS", "FILE", "IS", "A", "TEST", "BECAUSE", "IT", "IS", "A", "TEST" ]);
	});
})