const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './main.js',
    search: './search.js'
  },
  output: {
     path:path.resolve(__dirname,'build'),
     filename: '[name].js',
  },
  // plugins: [
  //   new CleanWebpackPlugin(['build'])
  // ],
  devServer: {
     inline: true,
     port: 8081
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}
module.exports = config;