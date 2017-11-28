var fs = require("fs");
var {getData, storeData, formatData} = require("./getData")
var isPrime = require("./primeNumbers")

function WordCount(){
	this.words = []
	this.counted = {}
};

WordCount.prototype.pushWords = function(fileName){
	this.words = formatData(fileName);
};

WordCount.prototype.countWords = function(){
	var self = this;
	this.words.forEach(function(word) {
		if (self.counted[word] === undefined) {
			self.counted[word] = 1;
		} else {
			self.counted[word] +=1;
		}
	});
};

WordCount.prototype.primeValues = function(number) {
  return { count: number, prime: isPrime(number) }
};

WordCount.prototype.formattedText = function() {
  for (var word in this.counted) {
    this.counted[word] = this.primeValues(this.counted[word]);
  }
};

module.exports = WordCount;