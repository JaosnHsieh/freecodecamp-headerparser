var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('my header parser');
});

app.listen(process.env.port || 8080);

console.log(8080);