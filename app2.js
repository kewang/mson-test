var protagonist = require('protagonist');
var fs = require("fs");

fs.readFile("/tmp/mson1.md", "utf8", function(err, data){
  protagonist.parse(data, function(error, result) {
    if (error) {
      console.log(error);

      return;
    }

    console.log(JSON.stringify(result));
  });
});
