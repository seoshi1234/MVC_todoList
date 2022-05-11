const {resolve} = require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:'./src/index.js',
  mode:'development',
  output:{
    filename:'bundle.js',
    path:resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpe?g|gif)$/,
        loader:'file-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
    })
  ]
}