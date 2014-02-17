var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/project.sqlite');

app.use(express.json());
app.use(express.urlencoded());

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));


require('./backend/Users/')(app, db);


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(3000);
console.log('Listening on port 3000');