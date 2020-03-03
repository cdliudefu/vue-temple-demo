const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/main.js")
  },
  resolve: {
    extensions: [".js", ".vue", ".less", ".css"],
    alias: {
      src: path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src")
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
            extractCSS: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname,"manifest.json")
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../template.html'),
      chunks:['app']
    }),
    new AddAssetHtmlPlugin({filepath:path.resolve(__dirname,'../dist','vendor.dll.js')}),
    new ProgressBarPlugin()
  ]
};
