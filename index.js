var http = require('http');
var fs = require('fs');
var WordCount = require('./src/wordCount');
var {getData, storeData, formatData} = require('./src/getData')

function app(url, fileName){
	http.get(url, response => {
		var fileOutput = storeData(fileName);
		fileOutput.on("finish", function(){
			var wordCount = new WordCount();
			wordCount.pushWords(fileName);
			wordCount.countWords();
			wordCount.formattedText();
			fs.writeFileSync('./public/' + fileName + '.txt', JSON.stringify(wordCount.counted, null, "\t"));
		});
		response.pipe(fileOutput);
	});
};

app('http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt', 'Railway-Children');

console.log('The server is running...')