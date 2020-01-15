const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html' //relative to root of the application
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}
