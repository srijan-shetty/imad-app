var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var app =express();
app.use(morgan('combined'));

app.get('/', function (req, result) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
function hash(input,salt){
    var hashed=crypto.pbkdf25sync(input,salt,1000,512,'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input', function(req,result){
   var hashedString=hash(req.params.input, 'this-is-some-random-arguments');
   res.send(hashedString);
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
