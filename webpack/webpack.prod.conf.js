const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = Merge(baseConfig,{
  mode:'production',
  devtool:'cheap-source-map',
  output:{
    filename:'js/[name]_[hash].js',
    path:path.resolve(__dirname,'../dist')
  },
  module:{
    rules:[
      {
        test:/\.(png|svg|jpe?g)$/i,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'img/[name].[hash:7].[ext]',
          pulbicPath:'/',
          esModule:false
        }
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        loader:'file-loader',
        options:{
          name:'fonts/[name].[hash:7].[ext]',
          esModule:false
        }
      },
      {
        test:/\.(css|less)$/,
        loaders:[
          {
            loader:MiniCssExtractPlugin.loader,
            options:{
              insertAt:'top'
            }
          },
          {
            loader:'css-loader',
            options:{
              importLoaders:2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      NODE_ENV:JSON.stringify('production')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['**/*','!vendor.dll.js']
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].[hash:7].css'
    })
  ],
  optimization:{
    minimizer:[
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin()
    ]
  }
});
