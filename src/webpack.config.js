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
    module: {
        rules: [{
            test: /\.less$/,//这里用到正则,点在正则里面有特别的意义，所以需要斜杆来转义为自己的点的意思，也就是字面字符 '.'
            // \.less$表示匹配字符结束为.less,匹配输入的结束
            // use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    // use: ["style-loader","css-loader", "less-loader", "postcss-loader"]
                    use: ["style-loader","css-loader", "less-loader"]//这个数组是从右往左的顺序执行加载loader.
                    // postcss-loader是加前缀的https://www.jianshu.com/p/e7b42055ee5c，这个我没有增加。
                    // less-loader官网的意思是把less编译为css,https://www.npmjs.com/package/less-loader
                    // css-loader根据官网解释是处理import和url这样的外部资源https://www.npmjs.com/package/css-loader
                    // 另一个博客解释https://www.cnblogs.com/wtsx-2019/p/12483265.html
                    //style-loader官网说的是把它放到页面DOM上。https://www.npmjs.com/package/style-loader
                    // 另一个博客解释 https://www.cnblogs.com/wtsx-2019/p/12483265.html
                // }) //把 css 抽离出来生成一个文件
        }]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
            mod: path.join(__dirname, "js/mod"),
            less: path.join(__dirname, "less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
            // $: "../lib/jquery-2.0.3.min.js"
            // $: "./js/lib/jquery-2.0.3.min.js"
        }),
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
    ]
};