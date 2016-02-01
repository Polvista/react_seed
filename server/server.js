var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname.slice(0, -6), 'public/index.html'));
});

app.listen(9090, function () {
    console.log('Example app listening on port 9090!');
});