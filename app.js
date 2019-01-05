var express = require('express');

var app = express();

app.get('/produtos', function(require,response){
    response.send('URL Produtos ativar ');
});

app.get('/', function(require,response){
    response.send('Home');
});

var server = app.listen(3000, function(){
    console.log('Executando a partir do servidor localhost porta 3000...');    

});

