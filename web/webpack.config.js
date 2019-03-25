const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './src/components/App.jsx',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },  

  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".jsx", ".json"]
  },

  target: 'web',

  mode: 'development',

  module: {
    rules: [
      { test: /\.(jsx|js)$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },

  plugins: [
    new Dotenv({
      path: './.env'
    })
  ]
};

module.exports = config;