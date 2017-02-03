var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3000; // port set to 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server active on ", port);
});
