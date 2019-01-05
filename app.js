var expressConf = require('./custom_express');

var app = expressConf();

app.listen(3000, function(){
    console.log('Executando a partir do servidor localhost porta 3000...');    

});

