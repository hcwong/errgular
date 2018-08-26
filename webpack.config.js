const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './web/app/app.js',
  output: {
    path: path.resolve(__dirname, 'web/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;