var express = require('express');
//var path = require('path');
var open = require('open');
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');

const port = 3000;
const config = require('../webpack.config');
const app = express();
const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, resp){
  resp.sendFile('C:/Angular/Webpack/dist/index.html');
});


app.listen(port, function(error){
  if(error){
      console.log(error);
  }
  else{
      open('http://localhost:'+port);
  }
});