var fs = require("fs")

function getData(fileName) {
  return './' + fileName + '.txt'
};

function storeData(fileName) {
  const text = fs.createWriteStream(getData(fileName));
  return text;
};

function formatData(fileName) {
  data = fs.readFileSync(getData(fileName), "utf8");
  return data.toUpperCase().replace(/_|\.|\'/g, '').split(/\s+/);
};

module.exports.getData = getData;
module.exports.storeData = storeData;
module.exports.formatData = formatData;