var path = require('path');


module.exports = {
  cache: true,
  entry: {
      app: './src/app.js'
  },
  output: {
    path: path.join(__dirname, './src/build'),
    publicPath: './build/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      // less
      { test: /\.less$/, loader: 'style!css!less'},
      { test: /\.css$/, loader: 'style!css' },
      { test:/\.woff$/,loader:"url-loader?prefix=font/&limit=5000&mimetype=application/font-woff"},
      { test:/\.woff2$/,loader:"url-loader?prefix=font/&limit=5000&mimetype=application/font-woff"},
      { test: /\.ttf$/, loader: "file-loader?prefix=font/"},
      { test: /\.eot$/, loader: "file-loader?prefix=font/"},
      { test: /\.svg$/, loader: "file-loader?prefix=font/"}

    ]
  },
  watch: true
}
