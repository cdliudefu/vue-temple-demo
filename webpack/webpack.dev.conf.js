const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = Merge(baseConfig,{
  mode:'development',
  devtool:'inline-source-map',
  output:{
    filename:'js/[name]_[hash].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new webpack.DefinePlugin({
      NODE_ENV:JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules:[
      {
        enforce:'pre',
        test:/\.vue$/,
        loader:'eslint-loader',
        exclude:/node_modules/,
        include:path.resolve(__dirname,'src'),
        options:{
          formatter:require('eslint-friendly-formatter'),
          cache:true,
          emitWarning:true,
          emitError:true
        }
      },
      {
        test:/\.(png|svg|jpe?g)$/i,
        loader:'url-loader',
        options:{
          esModule:false
        }
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/i,
        loader:'file-loader',
        options:{
          esModule:false
        }
      },
      {
        test:/\.(css|less)$/,
        use:[
          {
            loader:'style-loader',
            options:{}
          },{
            loader:'css-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'less-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      }
    ]
  },
  devServer:{
    host:'localhost',
    port:8000,
    hot:true,
    open:true,
    overlay:{
      errors:true,
      warnings:true
    },
    contentBase:path.resolve(__dirname,'dist'),
    historyApiFallback:true
  },
  cache:true
});
