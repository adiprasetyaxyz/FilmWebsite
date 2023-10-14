const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ]
      }
    ]
  },  
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: __dirname + '/assets/img',
          to: 'assets/img',
          noErrorOnMissing: true
      }
         ],
    }),
  ],
  
};