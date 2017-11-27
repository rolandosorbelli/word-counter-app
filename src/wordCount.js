var fs = require('fs');
const {getData, storeData, formatData} = require('./getData')

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
			self.counted[word] +1;
		}
	});
};

module.exports = WordCount;