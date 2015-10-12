var fs = require("fs");

var parseString = require('xml2js').parseString;
var data = fs.readFileSync('data.xml').toString();
parseString(data, function (err, result) {
    console.dir(JSON.stringify(result));
});


