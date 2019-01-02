const express = require('express');
const app = express();
const path = require('path');
const login = require('./src/server/routes/login.js')
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));



app.get('/', function(req, res) {
  res.sendFile('dist/index.html', { root: __dirname });
});



app.use('/login', login)


app.listen(3000);