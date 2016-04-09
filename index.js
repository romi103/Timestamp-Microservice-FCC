var express = require('express');
var app = express();
var path = require("path");


app.use(function (req, res, next) {
    var err = "";
    if (err) {
        console.log(err);
    } else {
        res.sendFile(path.join(__dirname + '/index.html'));
        next();
    }
});


app.use('/d', function (req, res) {


    console.log("done");


});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});