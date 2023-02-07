const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'//指定生成的文件的存放路径
})

module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'./src/index_test.js'),//读取该目录下文件作为入口
    output: {
        path: path.join(__dirname,'./dist'),//在该地址下生成一个js文件
        filename: 'bundle.js'
    },
    devServer: {
        open: true,//运行后自动打开网页
        host: '192.168.3.10',//本地主机地址
        port: 8080,//端口
        // static: './'
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {test: /\.css$/,use: ['style-loader','css-loader']},
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            {test: /\.jpg|png|gif$/,use: 'url-loader'}
        ]
    }

}