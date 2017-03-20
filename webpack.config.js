const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      './src/index'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'http://localhost:3000/assets/'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    inline: true
  }
}
