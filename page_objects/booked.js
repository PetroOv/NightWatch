var fs = require('fs');
var data = fs.readFileSync('urls.json');
var words = JSON.parse(data);
var urls = [];
for(var i =0; i<words.length;i++){
    urls[i] = words[i].addr;
}
module.exports = {
    url: urls,
    elements: {}
};