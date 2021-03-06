const utool = require('utiltool');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000; // port set to 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/', require('./routes')(express));

const server = app.listen(port, () => {
  utool.debug('Server active on port ', port);
});

module.exports = server;
