# Node-Express.js-online-memo
## 初始化
* 因为是node.js项目，所以可以按照下面命令初始化
```sh
npm init -y
```
### 发现一个小问题
* 就是初始化npm init的时候，**名字不能出现空格，不然会报下面的错误**
```
$ npm init -y
npm ERR! Invalid name: "Node-Express-online memo"

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\bomber\AppData\Roaming\npm-cache\_logs\2020-07-03T11_10_28_117Z-debug.log
```
* 把`online memo`中间的空格换成连接符`-`就没问题了，比如
```js
$ npm init -y
Wrote to D:\jirengu\github收集\Node-Express-online-memo\package.json:
{
  "name": "Node-Express-online-memo",
  "version": "1.0.0",
  "description": "* 因为是node.js项目，所以可以按照下面命令初始化 ```sh npm init -y ``` ### 发现一个小问题 * 就是初始化npm init的时候，名字不能出现空格，不然会报下面的错误 ``` $ npm init -y npm ERR! Invalid name: \"Node-Express-online memo\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bomber063/Node-Express.js-online-memo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/bomber063/Node-Express.js-online-memo/issues"
  },
  "homepage": "https://github.com/bomber063/Node-Express.js-online-memo#readme"
}
```
* 然后再对应的目录下面就生成了一个package.json文件。
* 安装这个的原因是因为后面会安装很多模块，需要把一些模块的配置写入到这个package.json里面，我们还需要使用一些`npm script`的一些命令加入到package.json的`scripts`里面。
## 安装及使用node.js的express.js框架
* 安装
```sh
npm install express --save
```
* 我安装完后显示的版本是
```sh
+ express@4.17.1
```
* 老师的版本是4.14.1
* 安装官网[安装后](https://expressjs.com/en/starter/installing.html)
* 然后创建一个[hello world后台](https://expressjs.com/en/starter/hello-world.html)，创建一个app.js，代码为
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))//这里的req就是请求，res就是响应，res.send就是响应的信息发送给前端的请求

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```
* 然后运行
```
$ node app.js
Example app listening at http://localhost:3000

```
* 就可以在地址` http://localhost:3000`看到Hello World!啦
* 这里的req就是请求，res就是响应，[res.send(body)](http://expressjs.com/en/5x/api.html#res.send)就是响应的信息发送给前端的请求,也就是发送HTTP响应。所述body参数可以是一个Buffer对象，一个String，对象，或一个Array。例如：
* [app.get](http://expressjs.com/en/5x/api.html#app.get.method)就是使用指定的回调函数将HTTP GET请求路由到指定的路径。
### 使用express-generator创建符合标准格式的网站的一个大致的框架
* [Express应用程序生成器express-generator](https://expressjs.com/en/starter/generator.html)
* express有能力去创建网站，但是网站里面有各种各样的东西，一个个的去找比较麻烦，**所以删除之前的app.js测试文件**
* 使用express-generator**符合标准格式的网站的一个大致的框架**,这里不用全局安装
```sh
npm i express-generator

+ express-generator@4.16.1
```
* 我安装的是4.16.1版本，老师的是4.14.1版本。
* 因为是局部安装的，所以需要前面加上npx，比如
```sh
$ npx express -h

  Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```
* 一般网站肯定要一个模板引擎，`-ejs`是就是模板殷勤的一种，还有`--hogan,--hbs,--pug`都是模板引擎。一般默认情况下是`--pug`，选个语法自己习惯的就可以了，性能都差不多。
* `-c`代表CSS引擎，默认会支持less语法，当然还有css对应的其他的编译器。我自己就不用专门去做一个转换，内置就有一个这种转换器。
* `--git`会增加一个`.gitignore`的文件。
* `-f`就是：正常情况下创建这个目录的时候是要在一个空的文件夹中，这个命令就是即使不是空文件夹也是可以去创建的。
### 创建
* 用下面命令`npx express . -f -e`
```sh
$ npx express . -f -e

  warning: option `--ejs' has been renamed to `--view=ejs'


   create : public\
   create : public\javascripts\
   create : public\images\
   create : public\stylesheets\
   create : public\stylesheets\style.css
   create : routes\
   create : routes\index.js
   create : routes\users.js
   create : views\
   create : views\error.ejs
   create : views\index.ejs
   create : app.js
   create : package.json
   create : bin\
   create : bin\www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=node-express-online-memo:* npm start
```
* 然后就可以看到**立刻创建了文件夹bin,public,routes,views。文件app.js,package.json(这个文件已经被改写掉了)等**.
* 接下来还需要创建依赖
```sh
   install dependencies:
     $ npm install
```
* 执行完后会有个5个依赖完成
```sh
added 5 packages from 4 contributors, removed 501 packages and updated 14 packages in 7.961s
```
* 所以根据提示我们执行下面命令安装依赖
```sh
npm install
```
* 然后根据前面的命令提示输入下面命令
```sh
 npm start
```
* 然后会弹出下面信息
```sh
$ npm start

> node-express-online-memo@0.0.0 start D:\jirengu\github收集\Node-Express-online-memo
> node ./bin/www
```
* 根据[官网说明](http://expressjs.com/en/starter/generator.html)，我们打开网站`http://localhost:3000/`就可以看到网页了。localhost是我们的域名，3000是端口号。**假设这个网站发布到线上，我们可以申请一个域名就可以换成我们自己的域名了**
## 为什么网页地址http://localhost:3000/可以展示内容
* 结合官网文档我们了解比较重要的两个点
  * [路由](http://expressjs.com/en/starter/basic-routing.html)
  * [中间件及静态文件](http://expressjs.com/en/starter/static-files.html)
  * 更多[常见问题](http://expressjs.com/en/starter/faq.html)
* `npm start`这个命令在做什么？
  * 我们可以在package.json里面可以看到，也就是找到当前目录的bin的www文件，这个www才是我们网站的入口。
      ```js
    "scripts": {
      "start": "node ./bin/www"
    },
      ```
### 查看www文件
* 默认情况下是3000是因为下面的代码
```js
var app = require('../app');//就是引入上一个目录的app.js这个文件
var debug = require('debug')('node-express-online-memo:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
// process.env.PORT是 环境变量http://expressjs.com/en/5x/api.html#app.settings.table
//当前进程的PORT，也就是当前提供给环境的PORT,如果没用就用3000端口，这就是默认情况下打开的就是3000
app.set('port', port);//当字符串port设置为当前的变量port
// app.set()这个说明 http://expressjs.com/en/5x/api.html#trust.proxy.options.table
```
* **如果我输入的命令给出了变量PORT**,那么启动的网页地址就需要使用这个PORT，比如
```sh
$ PORT=4000 npm start
# 或者PORT=4000 node bin/www，因为npm start就是启动bin目录下面的www文件
```
* 那么启动网页地址就是`http://localhost:4000/`
* **所以这里的PORT=4000就相当于给这个命令传递一些参数。代码里面就可以通过`process.env`去获得这个参数**，比如`process.env.PORT`就可以获取到PORT这个参数。
* 其他部分代码说明
```js
/**
 * Create HTTP server.
 */

var server = http.createServer(app);//启动服务器
// http.createServer() 可以在这里查看http://expressjs.com/en/guide/migrating-4.html#other-changes
// 新版本的已经用app.listen代替它，http://expressjs.com/en/5x/api.html#app.listen

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);//监听端口
server.on('error', onError);//当报错的时候执行onError函数
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES'://端口没有访问权限报错
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE'://端口占用报错
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
```
### 查看app.js文件
* 部分代码及注释说明
* express是一个node框架，通过调用express这个函数来得到这个app，整个网站的逻辑都是用这个app来处理的。
```js
var app = express();//express是一个node框架，通过调用express这个函数来得到这个app，整个网站的逻辑都是用这个app来处理的。
```
* 设置模板路径，[__dirname](http://nodejs.cn/api/modules.html#modules_dirname)当前模块的目录名。
* [path.join()](http://nodejs.cn/api/path.html#path_path_join_paths) 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
```js
app.set('views', path.join(__dirname, 'views'));//设置模板路径，__dirname当前模块的目录名。http://nodejs.cn/api/modules.html#modules_dirname
// path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。http://nodejs.cn/api/path.html#path_path_join_paths
// 也就是把当前的views文件夹设置为模板路径
```
* 模板引擎
```js
app.set('view engine', 'ejs');//模板引擎是ejs
// views文件夹里面的文件就是ejs文件。代码类似这样
//<h1><%= message %></h1>
//<h2><%= error.status %></h2>
//<pre><%= error.stack %></pre>
```
* views文件夹里面的文件就是ejs文件。代码类似这样
```js
<h1><%= message %></h1>
<h2><%= error.status %></h2>
<pre><%= error.stack %></pre>
```
* 中间件和[静态文件](http://expressjs.com/en/starter/static-files.html),[app.use](http://expressjs.com/en/5x/api.html#app.use)
```js
// 下面的app.use都是中间件,http://expressjs.com/en/5x/api.html#app.use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 这里的express.static(path.join(__dirname, 'public'))就是把当前目录的public作为静态目录，可以加载images,javascript,stylesheets，http://expressjs.com/en/starter/static-files.html
// 就是假设请求的是public目录的文件，就不用走路由可以直接拿到这个文件里面的信息。
```
* 请求与函数处理
```js
app.use('/', indexRouter);//当请求的路径是主页的时候就交给indexRouter函数去处理，下面的也是一样的意思。
app.use('/users', usersRouter);
```
### 查看routers文件夹中的index.js文件
* 引入express，从node_modules里面，用express的[Router函数](http://expressjs.com/en/5x/api.html#express.router)
```js
var express = require('express');//引入express，从node_modules里面
var router = express.Router();//用express的Router函数
```
* req是请求，res是响应，next是下一个执行的函数出口，其实前面还有一个err参数。具体看[官网说明](http://expressjs.com/en/starter/faq.html)
* 通过`consol.log(req.query)`查看更多细节，通过[req.query](http://expressjs.com/en/5x/api.html#req.query)可以查看到里面的信息，一般是get请求用它。
* 比如我在路径上写`http://localhost:4000/?name=bomber`,那么就会在node中显示
```sh
$ PORT=4000 node bin/www
 { name: 'bomber' }
 GET /?name=bomber 200 4.249 ms - 207
 GET /stylesheets/style.css 304 0.525 ms - -
```
* 一般用在哪里：
  * 一般是用在别人发送AJAX请求获取数据，比如有这个参数，就可以从这个参数去数据库里面查询响应的数据再通过res.send()返回给请求方。
  * 还有一种情况就是当一个请求到来之后，同样的url，但是查询参数不同，就是可以通过模板引擎去展示不同的页面。就是模板和数据结合渲染后生成的一个HTML页面。
  * 也就是一个请求到了之后交给路由处理，路由分发到不同的处理逻辑上，这个逻辑里面一般是向前端发送数据，要不然就是向前端发送一个页面，如果是发送数据就直接可以把数据给他。如果是发送页面，就是把数据加上模板组装起来，并通过res.render()发送出去。
  * 当然还可以更细化，包括如何与数据库交互更方便，这里涉及到一个模型就是MVC，MVC的概念最开始就是针对后端。
* MVC： 
  * 控制路由跳转的就是控制器C，模型M就是与数据库交互，向外界提供一个比较友好的接口。视图V就是views里面的模板，比如ejs模板。通过C控制请求的流向，通过M去获取数据，通过V去把数据渲染好展示给用户。
  * **前端在什么位置，其实前端就是集中在public这里，有图片，js和css**.如果页面比较复杂，那么public这里面的文件本身就很庞大。这里面的图片，js和css也有类似于MVC或者MVVM的概念，M数据打交道，C控制整个页面流向和跳转（比如单页面引用，可以通过不同的url显示貌似很多页面），V就是视图。
```js
/* GET home page. */
router.get('/', function(req, res, next) {//req是请求，res是响应，next是下一个执行的函数出口，其实前面还有一个err参数。http://expressjs.com/en/starter/faq.html
  console.log(req.query)
  // 通过req.query可以查看到里面的信息，一般是get请求用它。http://expressjs.com/en/5x/api.html#req.query
// 比如我在路径上写http://localhost:4000/?name=bomber
// 那么就会在node中显示
//$ PORT=4000 node bin/www
// { name: 'bomber' }
// GET /?name=bomber 200 4.249 ms - 207
// GET /stylesheets/style.css 304 0.525 ms - -
// 一般是用在别人发送AJAX请求获取数据，比如有这个参数，就可以从这个参数去数据库里面查询响应的数据再通过res.send()返回给请求方。
// 还有一种情况就是当一个请求到来之后，同样的url，但是查询参数不同，就是可以通过模板引擎去展示不同的页面。就是模板和数据结合渲染后生成的一个HTML页面。
// 也就是一个请求到了之后交给路由处理，路由分发到不同的处理逻辑上，这个逻辑里面一般是向前端发送数据，要不然就是向前端发送一个页面，如果是发送数据就直接可以把数据给他。如果是发送页面，就是把数据加上模板组装起来，并通过res.render()发送出去。
// 当然还可以更细化，包括如何与数据库交互更方便，这里涉及到一个模型就是MVC，MVC的概念最开始就是针对后端。
// 控制路由跳转的就是控制器C，模型M就是与数据库交互，向外界提供一个比较友好的接口。视图V就是views里面的模板，比如ejs模板。通过C控制请求的流向，通过M去获取数据，通过V去把数据渲染好展示给用户。
// 前端在什么位置，其实前端就是集中在public这里，有图片，js和css,如果页面比较复杂，那么public这里面的文件本身就很庞大。这里面的图片，js和css也有类似于MVC或者MVVM的概念，M数据打交道，C控制整个页面流向和跳转（比如单页面引用，可以通过不同的url显示貌似很多页面），V就是视图。
  res.render('index', { title: 'Express' });
});
```
* 这里有[router.get路由](http://expressjs.com/en/5x/api.html#router.METHOD),这里有响应的渲染函数[res.render](http://expressjs.com/en/5x/api.html#res.render)
```js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//这里有router.get路由,http://expressjs.com/en/5x/api.html#router.METHOD
// 这里有响应的渲染函数res.render,http://expressjs.com/en/5x/api.html#res.render

module.exports = router;
```
## 学习express官网
* 比较重要的三个概念
  * 中间件——[写中间件](http://expressjs.com/en/guide/writing-middleware.html)和[使用中间件](http://expressjs.com/en/guide/using-middleware.html)
    * [Request中的:id](http://expressjs.com/en/5x/api.html#req),这里默认id前面有一个**冒号**。
      ```js
        app.get('/user/:id', function (req, res) {
        res.send('user ' + req.params.id)
        //如果在请求的路径地址是http://localhost:3000/user/123
        //那么req.params.id就是123
      })
      ```
  * [路由](http://expressjs.com/en/guide/routing.html)
  * [模板引擎](http://expressjs.com/en/guide/using-template-engines.html)
* next()和next('route')
  * [next()](http://expressjs.com/en/guide/using-middleware.html)是将控制权传递给下一个中间件
  * next('route')在官网有提到两次，分别是[using-middleware](http://expressjs.com/en/guide/using-middleware.html)和[app.METHOD](http://expressjs.com/en/5x/api.html#app.METHOD),要跳过路由器的其余中间件功能，请调用next('router') 将控制权转回路由器实例,也就是next使用字符串调用'router'将导致绕过该路由器上的所有其余路由回调。**简单理解就是直接跳过该路由上的中间件跳出这个路由**
  * 更多说明：
    * [对express 应用级中间件next('route') 方法实例的疑惑](https://www.imooc.com/wenda/detail/516054)
    * [Express next function, what is it really for?](https://stackoverflow.com/questions/13133071/express-next-function-what-is-it-really-for)
  * 举例`next("route")`，下面代码用到`next("route")`
  ```js
    var express = require('express');//引入express，从node_modules里面
    var router = express.Router();//用express的Router函数
    router.get('/', function fn1(req, res, next) {
      console.log("First middleware function called");
      next();
    },
    function fn2(req, res, next) {
      console.log("Second middleware function called");
      next("route");
    },
    function fn3(req, res, next) {
      console.log("Third middleware function will not be called");
      next();
    })
    module.exports = router;
  ```
  * 将会打出下面结果,可以看到第三个third并没有被调用。
  ```sh
      $ npm start

      > node-express-online-memo@0.0.0 start D:\jirengu\github收集\Node-Express-online-memo
      > node ./bin/www

      First middleware function called
      Second middleware function called
      GET / 404 13.904 ms - 994
  ```
  * 如果都用next()那么就会打出第三个third
  ```sh
      $ npm start

      > node-express-online-memo@0.0.0 start D:\jirengu\github收集\Node-Express-online-memo
      > node ./bin/www

      First middleware function called
      Second middleware function called
      Third middleware function will not be called
      GET / 404 20.013 ms - 994
  ```
* [app.use（[path，] callback [，callback ...]）](http://expressjs.com/en/5x/api.html#app.use)
将指定的一个或多个中间件函数安装在指定的路径上：当所请求路径的基数匹配时，将执行中间件函数path。
  * 一条路线将匹配紧随其后的任何路径，并带有“ /”。例如：app.use('/apple', ...)将匹配“ / apple”，“ / apple / images”，“ / apple / images / news”，等等。

由于path默认值为“ /”，因此将为对应用程序的每个请求执行不带路径安装的中间件。
例如，此中间件功能将针对对应用程序的**每个请求**执行：
* 路由中间件和应用中间件很类似。路由器级中间件与应用程序级中间件的工作方式相同，**只不过它绑定到的实例express.Router()**。
```js
var router = express.Router()
```
* 但是**路由中间件可以通过应用中间件的基础上再写url路径**。比如app.js里面有一个代码
```js
var indexRouter = require('./routes/index');
app.use('/bomber', indexRouter);//当请求的路径是主页的时候就交给indexRouter函数去处理
```
* 然后在routes文件夹里面的index.js文件有一个代码
```js
router.get('/aaa', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```
* 那么**真正匹配的路由**应该是`http://localhost:3000/bomber/aaa`，**也就是连接了两个文件的内容的路由**。前面的bomber相当于应用层(可以是video)，比如video应用里面对应的是什么video(可以是aaa这样的参数)。这样网站的逻辑功能划分的更加清楚。当然如果网站本来就很简单也可以不用划分两级来处理跳转，直接在app.js里面跳转即可。
## 其他
### 小技巧安装nrm切换源
* [npr文档](https://www.npmjs.com/package/nrm)
```sh
npm i nrm
```
* 因为我不是全局安装的，所以使用了[npx](https://www.npmjs.com/package/npx)这个命令,这个npx就相当于把目录对应的文件找到
```sh
$ ./node_modules/express-generator/bin/express-cli.js -h
```
* 查看可选源列表，`*`符号代表当前正在使用的源
```sh
$ npx nrm ls
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

```
* 测试速度（测试源的相应时间）
```sh
$ npx nrm test
  npm ---- 1571ms
  yarn --- 4391ms
  cnpm --- 518ms
  taobao - 190ms
  nj ----- Fetch Error
  npmMirror  1825ms
  edunpm - Fetch Error
```
* 将npm切换指定的源,比如切换为cnpm
```
$ npx nrm use cnpm

   Registry has been set to: http://r.cnpmjs.org/
```
* 切换为taobao
```
$ npx nrm use taobao

   Registry has been set to: https://registry.npm.taobao.org/
```
* 切换源后你可以去`C:\Users\bomber`，里面查看`.npmrc`文件可以看到源已经修改了。
* 通过help命令查看更多用法
```sh
$ npx nrm --help
Usage: cli [options] [command]

Options:
  -V, --version                           output the version number
  -h, --help                              output usage information

Commands:
  ls                                      List all the registries
  current                                 Show current registry name
  use <registry>                          Change registry to registry
  add <registry> <url> [home]             Add one custom registry
  set-auth [options] <registry> [value]   Set authorize information for a custom registrywith a base64 encoded string or username and pasword
  set-email <registry> <value>            Set email for a custom registry
  set-hosted-repo <registry> <value>      Set hosted npm repository for a custom registryto publish packages
  del <registry>                          Delete one custom registry
  home <registry> [browser]               Open the homepage of registry with optional browser
  publish [options] [<tarball>|<folder>]  Publish package to current registry if current registry is a custom registry.
   if you're not using custom registry, this command will run npm publish directly
  test [registry]                         Show response time for specific or all registries
  help                                    Print this help

```
* 更多用法看[npr文档](https://www.npmjs.com/package/nrm)
* 以前我做过一个笔记，就是需要发布npm包的时候需要用到真实的npm地址，就需要切换到npm源，前面的[笔记](https://github.com/bomber063/DIY-UI-frame-by-Vue)


### git hub命令创建分支使用
* 创建一个分支teach，同时切换到这个teach分支上，更多解释看[这里explainshell](https://explainshell.com/explain?cmd=git+checkout+-b+teach)
```sh
git checkout -b teach
```
* 它是下面两个命令的缩写
* 创建分支teach
```sh
git branch teach
```
* 切换分支到teach
```sh
git checkout teach
```