// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
const extractSCSS = new ExtractTextPlugin('./app/styles/app.scss');

const path = require('path');

const config = {
  entry: [
          './app/app.jsx',
          './app/styles/app.scss',
        ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,

        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
           path.resolve(__dirname, "node_modules"),
           path.resolve(__dirname, "bower_components")
        ],
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        },
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  resolve:{
    modules:
    [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias:{
      //"module": path.resolve(__dirname, "app/third/module.js"),
      "TodoApp":path.resolve(__dirname, 'app/components/todoApp.jsx'),
      "AddTodo":path.resolve(__dirname, 'app/components/addTodo.jsx'),
      "Todo":path.resolve(__dirname, 'app/components/todo.jsx'),
      "TodoList":path.resolve(__dirname, 'app/components/todoList.jsx'),
      "FilterTodo":path.resolve(__dirname, 'app/components/filterTodo.jsx'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': "jquery",
      "jQuery": "jquery"
    }),
    extractSCSS,
    // new webpack.optimize.UglifyJsPlugin(),
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
module.exports = config;
