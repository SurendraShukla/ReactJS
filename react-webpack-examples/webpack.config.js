const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const appTitle = 'Pizza Challenge';
const filePath = path.join(__dirname, 'src','index.js');
const PORT = '8080';

const config = {
  entry: filePath,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist', )
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: appTitle,
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    compress: true,
    open: true,
    port: PORT
  }
}

module.exports = config;
