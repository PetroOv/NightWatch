var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var data = fs.readFileSync('urls.json');
var words = JSON.parse(data);
var urlList = "";
for(let i=0; i<words.length;i++){
    urlList = urlList + words[i].addr;
    if(i < words.length -1)
        urlList = urlList + ", "
}
var userNames = {
    basicAuth: 'chicken',
    clientEmail: 'SaddenedSnail@domain.com',
    adminEmail: 'admin@domain.com',
};

module.exports = {
    userNames: userNames,
    urlList: urlList
}