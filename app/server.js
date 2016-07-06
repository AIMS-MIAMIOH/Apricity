var express = require('express');
var app = express();
var handlebars = require('express3-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('language'); 
});

app.get('/welcome', function(req, res){
    res.render('welcome'); 
});

app.get('/country_list', function(req, res){
    res.render('country_list'); 
});

app.get('/country', function(req, res){
    res.render('country_page'); 
});

app.get('/search', function(req, res){
    res.render('form'); 
});

//This allows us to serve up static files from a Public directory
app.use('/public', express.static('public')); 

var port = 3000; 
app.listen(port);