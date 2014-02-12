var express = require('express');
var app = express();

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));



app.get('/users', function(req, res) {
    res.json({ user: 'tobi' });
});


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(3000);
console.log('Listening on port 3000');