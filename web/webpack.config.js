const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: './src/components/App.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },  

  devtool: "none",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  target: 'web',

  mode: 'production',

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {passes: 2}
        }
      })
    ],
    splitChunks: {
      chunks: 'all'
    },
  },

  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: Number.MAX_SAFE_INTEGER,
    })
  ]
};

module.exports = config;