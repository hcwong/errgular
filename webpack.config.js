const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './web/src/components/App.tsx',

  output: {
    path: path.resolve(__dirname, 'web/dist'),
    filename: 'bundle.js'
  },  

  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { exclude: /node_modules/ },
      { test: /\.svg$/, use: [{loader: "file-loader", options: {name: "./arrow_down.svg"}}]}
    ]
  }
};

module.exports = config;