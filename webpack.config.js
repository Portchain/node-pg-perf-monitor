const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./app/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'public/bundle.js'
  },
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: 'db', to: 'db' },
        { from: 'app/styles', to: 'public/styles' }
    ], {debug: 'info'})
  ]
}