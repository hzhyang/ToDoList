const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // 开发环境
  devtool: 'eval-source-map', // 映射报错
  entry: './src/index.js', // 入库
  output: { // 出口
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ // react babel预编译为js
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 插件 清楚dist目录
    new HtmlWebpackPlugin({ // 将根据模板把编译好的js添加到index.html
      title: 'todolist',
      template: './public/index.html'
    })
  ],
  resolve: { // 设置别名
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      'Components': path.resolve(__dirname, 'src/components/')
    }
  }
}
