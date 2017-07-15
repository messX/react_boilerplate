// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins

const path = require('path');

const config = {
  entry: './app/app.jsx',
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
    }
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new HtmlWebpackPlugin({template: './src/index.html'})
  // ]
};
