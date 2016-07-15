var express = require('express');
var app = express();

app.enable('trust proxy');
app.get('/',function(req,res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    var lang = req.headers['accept-language'];
    lang = lang.split(',')[0];
    var os = req.headers['user-agent'].split(' ')[1].substring(1);
    var obj = {ip:ip,language:lang,os:os};
    res.json(obj);
});

app.listen(process.env.PORT || 8080);

console.log(8080);