'use strict';

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(express.static('clients'));
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
  console.log('Listening on port ', server.address()
    .port);
});