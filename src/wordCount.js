var fs = require('fs');
const {getData, storeData, formatData} = require('./getData')

function WordCount(){
	this.words = []
	this.counted = {}
};

WordCount.prototype.pushWords = function(fileName){
  //var data = fs.readFileSync('./the-railway-children.txt', "utf8");
  this.words = formatData(fileName);
};

module.exports = WordCount;