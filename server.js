var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;
var port = 3000;
app.use(cors({
    origin: 'http://localhost:4000'
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todoList', function (err) {
    if (err) {
        console.log("Not connected to db" + err);
    }
    else {
        console.log("Successfully connected");
        app.listen(port, function () {
            console.log("Running on port" + port);
        });
    }
});

var todoSchema = new Schema({
    todoId : Number,
    todoName: String,
    todoDescription: String,
    todoDay : String,
    todoTime: String
})

var todo = mongoose.model("todo", todoSchema);