var fs = require('fs');

function WordCount(){
	this.words = []
};

WordCount.prototype.pushWords = function(){
  var data = fs.readFileSync('./the-railway-children.txt', "utf8");
  this.words = data.toUpperCase().replace(/_|\.|\'/g, '').split(/\s+/);
};

module.exports = WordCount;