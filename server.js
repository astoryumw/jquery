var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/endpoint', function(req,res){
    console.log('body: ' + JSON.stringify(req.body));
    res.send(req.body);
})

app.listen(3000);