const config = require('./webpack.config.js');

config.mode = 'production'; // Overwrite mode from development to production and then export!
module.exports = config;