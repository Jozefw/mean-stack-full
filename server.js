var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/things');

// model taks the name of the model and the schema which can be passed via a variable
// var schema = new mongoose.Schema({ name: 'string', size: 'string' });
// var Tank = mongoose.model('Tank', schema);
var thingModel = mongoose.model('thing', {thing: String});

app.post('/add', function(req, res){
    // body.thing comes from the above mongoose model
    var thing = req.body.thing;
    // the value thing being passed below comes from above
    var thingDoc = new thingModel({thing: thing});
    thingDoc.save(function(){
        res.send();
    });

});


app.listen(3000);
