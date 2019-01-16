const express = require('express');
const app = express();
const path = require('path');
const login = require('./src/server/routes/login.js')
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);
const bodyParser = require('body-parser');
const { join } = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) // never forget body parser again pls 
app.use(express.static('./dist/public'));
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

let port = process.env.PORT || 8080



app.get('*', function(req, res) {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
});

app.use('/login', login)


app.listen(port);