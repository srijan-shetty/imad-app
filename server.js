var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'srijanssnl406',
    database:'srijanssnl406',
    host:'db.imad.hasura-app.io:5432',
    port:'5342',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, result) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var Pool= new Pool(config);

/*app.get('/test-db',function(req,res) {
   //make a request
   //response
   Pool.query('SELECT * FROM test', function(err,result) {
       if(err) {
       res.status(500).send(err.toString());
       }else {
           res.send(JSON.stringify(result.rows));
       }
       
   });
});*/
app.get('/test-db',function(req,res)
{
	//make a query
		//return a response
	Pool.query('select * from test',function(err,res) 
    { 
		if(err)
        {
			res.status(500).send(err.toString());
		}
		else
        {
			res.send(JSON.stringify(result.rows)); 
		}
	});

});
var counter=0;
app.get('/counter',function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/article-one', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
