const path = require('path');
const config = require('./webpack.config.js');

// Configuring the dev server tool - check out documentation to see whtat key-value pairs do
config.devServer = {
  historyApiFallback: true, //serve a previous page on a 404 error
  contentBase: path.resolve('src'), // location of the source code
  port: 8080, // use this port for the server
  hot: true, // refresh the browser when changes are saved
  open: true, // open the project in the browser when the server starts (Beth doesn't like this)
  host: '0.0.0.0', // make server accessible externally - useful for checking on mobile devices, but get rid of if there are firewall issues
  watchContentBase: true, // watch for changes to static files
};

config.devtool = 'inline-source-map'; // a tool to find errors in the compiled code, but show them against the source code for easier debugging

module.exports = config;