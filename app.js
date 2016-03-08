var express = require('express');
var appServer = express();

appServer.use(express.static(__dirname + '/src'));
appServer.set('views', './src');

appServer.get('/', function(req, res){
  res.render('index.html');
})

appServer.listen(8088);
