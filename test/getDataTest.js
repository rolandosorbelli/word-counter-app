var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
const mock = require('mock-fs');
var WordCount = require('../src/wordCount');
const {getData, storeData, formatData} = require('../src/getData')

describe("getData", function(){
	it("checks that data are loaded correctly", function(){
		data = getData("test")
		expect(data).to.equal("./test.txt")
	});
})