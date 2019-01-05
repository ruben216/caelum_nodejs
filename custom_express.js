var express = require('express');

module.exports = function(){
var app = express();

app.set('view engine','ejs');

app.get('/produtos', function(require,response){
    response.send('URL Produtos ativar ');
});

app.get('/', function(require,response){
    response.send('Home');
});
};



