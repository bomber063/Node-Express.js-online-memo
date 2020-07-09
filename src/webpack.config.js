var webpack = require('webpack')//因为后面用到的webpack.这样的点操作
var path = require('path')//path模块是node内置模块不需要单独安装。它的作用是方便我们把url组装在一起
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var autoprefixer = require('autoprefixer')

module.exports = {
    // entry就是js的入口
    // https://www.webpackjs.com/configuration/entry-context/
    entry: path.join(__dirname, "js/app/index.js"),//这里如果不适用__dirname.而写成./js.app/index.js就代表启动的目录，如果启动的终端目录是在src下就没问题，不是src目录就会出错导致找不到index.js文件，所以用到————dirname和path.join去找这个地址会更加精准。
    // http://expressjs.com/en/starter/static-files.html
    // 另外这里还可以把左斜杠和右斜杠转换为可用的，因为在window里面有\。而且在MAc是/。
    // http://nodejs.cn/api/modules.html#modules_require_id
    output: {//输出层就是在src目录的上一层的public目录
        // https://www.webpackjs.com/configuration/output/
        path: path.join(__dirname, "../public"),//https://www.webpackjs.com/configuration/output/#output-path
        filename: "js/index.js"//输出的文件名字是index.js,https://www.webpackjs.com/configuration/output/#output-filename
    },
    // module: {
    //     rules: [{
    //         test: /\.less$/,
    //         use: ExtractTextPlugin.extract({
    //                 fallback: "style-loader",
    //                 use: ["css-loader", "less-loader", "postcss-loader"]
    //             }) //把 css 抽离出来生成一个文件
    //     }]
    // },
    // resolve: {
    //     alias: {
    //         jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
    //         mod: path.join(__dirname, "js/mod"),
    //         less: path.join(__dirname, "less")
    //     }
    // },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery"
    //     }),
    //     new ExtractTextPlugin("css/index.css"),
    //     new webpack.LoaderOptionsPlugin({
    //         options: {
    //             postcss: [
    //                 autoprefixer(),
    //             ]
    //         }
    //     })
    //     // new webpack.optimize.UglifyJsPlugin({
    //     //     compress: {
    //     //         warnings: false,
    //     //     },
    //     //     output: {
    //     //         comments: false,
    //     //     },
    //     // }),
    // ]
};