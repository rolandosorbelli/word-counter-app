var http = require('http');
var fs = require('fs');
var WordCount = require('./src/wordCount');
const {getData, storeData, formatData} = require('./src/getData')


var server = http.createServer(function (req, res) {
	var count = new WordCount();
	count.pushWords();
	console.log(count.words)
});

function run(url, fileName){
	http.get(url, response => {
		var fileOutput = storeData(fileName);
		fileOutput.on("finish", function(){
			var count = new WordCount();
			count.pushWords(fileName);
			count.countWords();
			fs.writeFileSync('./public/' + fileName + '.txt', JSON.stringify(count.counted, null, "\t"));
		});
		response.pipe(fileOutput);
	});
};

run('http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt', 'Railway-Children');

console.log('The server is running...')