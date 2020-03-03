//动态链接库，是提高打包效率
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode:'production',
  entry:{
    vendor:['vue','vuex','vue-router']
  },
  output:{
    library:'familybucket',
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].dll.js'
  },
  plugins:[
    new webpack.DllPlugin({
      name:'familybucket',
      path:path.resolve(__dirname,'manifest.json')
    }),

  ]
}
