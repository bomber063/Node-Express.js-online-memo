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
### 路由
* [app.locals](http://expressjs.com/en/5x/api.html#app.locals)在app.js里面有用到就是本地变量。
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
* 那么**真正匹配的路由**应该是`http://localhost:3000/bomber/aaa`，**也就是连接了两个文件的内容的路由**。**前面的bomber相当于应用层**(可以是video)，比如video应用里面对应的是什么video(可以是aaa这样的参数)。这样网站的逻辑功能划分的更加清楚。当然如果网站本来就很简单也可以不用划分两级来处理跳转，直接在app.js里面跳转即可。
### 模板引擎
* 我这里使用[ejs模板引擎](https://ejs.bootcss.com/),[ejs模板引擎github](https://github.com/mde/ejs),在views目录下面的就是ejs模板文件。一般都是带有这样的符号`<% %>`,比如,
```js
<%= error.status %>
```
* 模板引擎最常用的就是if...else和for循环。
### 静态文件
* [静态文件](http://expressjs.com/en/starter/static-files.html),若要提供静态文件，例如图像，CSS文件和JavaScript文件，请使用express.staticExpress中的内置中间件功能。
* [__dirname](http://nodejs.cn/api/modules.html#modules_dirname)就是当前模块目录名字。
* [path.join()](http://nodejs.cn/api/path.html#path_path_join_paths) 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。长度为零的 path 片段会被忽略。 如果连接后的路径字符串为长度为零的字符串，则返回 '.'，表示当前工作目录。
```js
path.join('/目录1', '目录2', '目录3/目录4', '目录5', '..');
// 返回: '/目录1/目录2/目录3/目录4'

path.join('目录1', {}, '目录2');
// 抛出 'TypeError: Path must be a string. Received {}'
```
* 比如我在app.js里面写了一句这样代码
```js
app.use(express.static(path.join(__dirname, 'public')));
// 这里的express.static(path.join(__dirname, 'public'))就是把当前目录的public作为静态目录，可以加载images,javascript,stylesheets，http://expressjs.com/en/starter/static-files.html
// 就是假设请求的是public目录的文件，就不用走路由可以直接拿到这个文件里面的信息。
```
* 那么就可以不用走路由可以直接拿到这个文件里面的信息，比如，如果目录public/stylesheets/style.css。**我可以省去public目录这个名字，而直接写下面地址就可以拿到style.css文件**
```js
http://localhost:3000/stylesheets/style.css
```
* 所以在主目录`http://localhost:3000/`下面，通过打开开发者工具可以看到head标签里面有一个好href，这里的地址是`/stylesheets/style.css`，也就是把主目录加上之后，完整的路径是`http://localhost:3000/stylesheets/style.css`，并没有public这个文件夹目录。
```html
<link rel="stylesheet" href="/stylesheets/style.css">
```
* 就是因为我们有写静态文件这段代码
```js
app.use(express.static(path.join(__dirname, 'public')));
```
#### 设置静态文件后如果有同样的路由就会被拦截
* 比如在app.js里面有这样一句代码
```js
app.use(express.static(path.join(__dirname, 'public')));

app.use('/stylesheets/style.css',function(req,res,next){
  console.log('get style.css....')
  res.send('get style.css....')
})//这段路由不会被执行
```
* 因为前面已经设置了静态文件资源，那么会被拦截，那么下面的`/stylesheets/style.css`就不会被执行，**因为静态文件资源已经匹配上了，就不会继续往下面走了，也就是这个路径和整个文件夹匹配上了，它会认为你需要的是这个目录里面的资源，就不会往下面代码继续执行**。
* 如果app.js里面的代码是这样的
```js
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/stylesheets/style.css',function(req,res,next){
  console.log('get style.css....')
  res.send('get style.css....')
})//这段路由会被执行
```
* 因为前面没有设置静态文件资源，那么下面`/stylesheets/style.css`就会被执行,并且输入这个路由的时候会显示`get style.css....`，并且在node上面会打印出`get style.css....`。
* 所以这里我们也可以知道路由里面不需要看文件的后缀，比如`style.css`，这里面的后缀css只是路由的名字而已,你可以写成`style.html`或者任何奇怪的名字，**它只是一个字符串名字而已**。
## webpack配置
* 一般的后端都是增删改查。叫做[增删改查(curd)](https://www.cnblogs.com/jyue/p/10481317.html):
  * curd的解释: 代表创建（Create）、更新（Update）、读取（Retrieve）和删除（Delete）
* 后台还可以加一些普通的权限管理，比如登陆，管理员额外去管理和操作某些页面。
### 在package.json里面的script里面写PORT老师的版本不适合我
* 我的电脑系统是window10，老师的应该是苹果的IOS，根据[官网的说明](http://expressjs.com/en/starter/generator.html)
* On MacOS or Linux, run the app with this command:
```sh
$ DEBUG=myapp:* npm start
```
* **On Windows, use this command:**
```sh
> set DEBUG=myapp:* & npm start
```
* 老师用的是下面的代码
```js
  "scripts": {
    "start": "PORT=8080 node ./bin/www"
  },
```
* **经过测试我的电脑上面代码会报错，要用下面的代码才可以不报错执行**
```js
  "scripts": {
    "start": "set PORT=8080 & node ./bin/www"
  },
```
### 80端口需要管理员权限
* 我的电脑是自己的电脑，所以是由管理员权限的
* 80端口默认就可以不用写端口号了
```sh
  "scripts": {
    "start": "PORT=80 node ./bin/www"
  },
```
* **但是没有权限的电脑会报错，显示出需要你提升权限**，会显示类似如下报错
```
Port 80 requires elevated privileges
```
* 在Mac电脑里面如果要想管理员权限可以前面加上`sudo`，这样可以以root的权限去运行，比如
```sh
sudo PORT=80 node ./bin/www
```
* 通过运行配置id table，把80端口转换我设置的端口，比如8080端口，那么别人在输入网址的时候就不用在输入端口号了，因为默认就是转化为我设置的8080端口。**对于用于来说只是输入了url就可以看到页面，不用输入端口，对我自己来说，用户是访问的是8080端口，而且我自己有权限去启动这个端口的**，除了运行配置id table，后端去设置服务器的配置也可以作为转发。
### 代码目录分析
* 完善文件的目录。把相应的内容放到合适的地方。
* express框架有下面的目录：
  * bin目录里面是可执行的文件。也是启动的网站的入口
  * node_modules就是一些依赖的模块。
  * public是静态资源
  * routes是路由的处理
  * views是模板
  * **我们把前端的业务代码放到public里面**
* 单个文件是无法执行的，我们用webpack的时候，必须通过webpack这个命令把它进行处理。之后得到一个可执行的js文件，**public里面应该是我们的目标代码**。所以我们还需要**创建一个src作为源代码和源文件**。
* 创建src目录后我们同样创建一些文件夹和文件,我们的前端代码就在这里面写
  * imgs——图片，工程化一般是压缩后的图片移动到这里。但是我这里就没有压缩了
  * js代码
  * less代码，会转换为css.
* 源代码写完后经过命令编译就转换到public目录下面,整个网站是访问的是public里面的代码的。
* 在js代码中创建如下
  * lib——一般是引用的第三方库，比如Jquery，vue等，当然可以使用npx install的方式安装到node_modules里面也是可以的。虽然node_modules是后端用的东西，但是因为我们用了webpack所以也可以拿到。
  * app——代表不同页面的一个入口。比如这里面有首页index.js，还有详情页detail.js等。
  * mod——代表模块，一个入口里面会有很多模块，这些模块在多个页面里面都会使用，比如曝光模块，轮播组件，事件中心，事件管理器，懒加载等通用的东西
* 入口文件里面需要什么模块就直接require，从mod文件夹中去拿。
* **之所以去做一个目录页和页面的划分是为了让整个逻辑更加清晰**。一眼就知道要修改什么，一眼就知道有什么作用。下次新增的时候也容易归类。
* **对于这种目录层级有时候面试会问到有些什么好的经验或者方法**，一般有目录分级有两种
  * 一种是按照应用去划分。比如app里面有很多文件夹，每一个文件夹代表一个页面里面**所使用的js,包括了库文件和页面文件**.
  * 一种是按照功能去划分。就是把一些非页面的东西放到一起，页面的东西放到一起。**我们就是采用这种**
* 接下来就需要定义页面，定义接口，定义路由
* 因为webpack.config.js是前端用的东西，就放到src目录里面。当然如果前后端都需要用到可以把它放到最外面。webpack的作用就是把src这里面的代码和模块进行打包编译。放到public下面的js里面。
* 首先需要配置一个工程化和自动化的流程环境。第二个就是实现一个功能，在功能完成之前自己做一个测试。
* 我们的计数选型里面需要用到webpack。我们的css里面使用到的是less.最后会被打包放到我们的public目录里面。
### 自动编译
* 这样就不用每次在src里面改一些代码就要编译一次，它会自动去编译。
* 先测试wepback的配置没问题。**这样出错的时候我们就知道是webpack配置的出错还是代码本身出错。还是代码里面引用的路径出错**。
### 测试webpack
* [module.require(id)]方法提供了一种加载模块的方法，就像从原始模块调用 require() 一样。为了做到这个，需要获得一个 module 对象的引用。 **因为 require() 会返回 module.exports**，且 module 通常只在一个特定的模块代码中有效，所以为了使用它，必须显式地导出。
* 在mod文件夹中创建a.js和b.js。
* a.js
```js
module.exports.a='aaaa'
```
* b.js
```js
var a=require('./a.js').a//因为a.js里面exports出去的是一个对象也就是module.exports。我们需要用到里面的a属性，就是这么写
var a1=require('./a.js')

module.exports={
    b:'bbbb',
    a:a
}
```
* mod目录下面的b.js使用了a.js，app目录下面的index.js使用了mod目录下的b.js。
```js
var obj=require('../mod/b.js')
//这里不用使用点了，因为是在b.js里面的对象
// module.exports={
    // b:'bbbb',
    // a:a
// }
console.log(obj)
```
* 需要把src里面的app目录下的index.js打包放到public的js目录下面。
* 接下来要在src目录下创建一个webpack.config.js文件
* [path（路径）](http://nodejs.cn/api/path.html#path_path)是node.js的内置模块，不需要安装
* 因为要用到webpack,所以先要安装，为了和老师版本一样我就安装了2.2.1版本，[更新版本的安装就看这里](https://www.webpackjs.com/guides/installation/)
```sh
npm install -dev webpack@2.2.1
```
* 然后切换到src目录下面运行，因为是局部安装所以要使用npx。
```sh
npx webpack
```
* 运行后
```sh
$ npx webpack
Hash: 4168577e47e5ac05297a
Version: webpack 2.2.1
Time: 58ms
      Asset    Size  Chunks             Chunk Names
js/index.js  3.1 kB       0  [emitted]  main
   [0] ./js/mod/a.js 23 bytes {0} [built]
   [1] ./js/mod/b.js 159 bytes {0} [built]
   [2] ./js/app/index.js 130 bytes {0} [built]
```
* 这里贾三了文件012，如果只有一个文件，那就代表有三个中有两个文件加载失败。
* 我们打开public目录下面的js文件夹下的index.js，在最后可以看到包括了a.js,b.js和app目录下的index.js内容。所以代表webpack是没有问题的.
```js
/***/ (function(module, exports) {

module.exports.a='aaaa'//这是a.js的内容

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var a=__webpack_require__(0).a//因为a.js里面exports出去的是一个对象也就是module.exports。我们需要用到里面的a属性，就是这么写
var a1=__webpack_require__(0)

module.exports={//这是b.js内容
    b:'bbbb',
    a:a
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var obj=__webpack_require__(1)//这是app目录下的index.js内容
//这里不用使用点了因为是在b.js里面的对象
// module.exports={
    // b:'bbbb',
    // a:a
// }
console.log(obj)

/***/ })
/******/ ]);
```
* 通过help命令查看更多命令，当然可以在[官网查看这些命令](https://www.webpackjs.com/api/cli/#%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE)
```sh
$ npx webpack -help
webpack 2.2.1
Usage: https://webpack.github.io/docs/cli.html
Usage without config file: webpack <entry> [<entry>] <output>
Usage with config file: webpack

Config options:
  --config  Path to the config file
                          [字符串] [默认值: webpack.config.js or webpackfile.js]
  --env     Enviroment passed to the config, when it is a function

Basic options:
  --context    The root directory for resolving entry point and stats
                                        [字符串] [默认值: The current directory]
  --entry      The entry point                                          [字符串]
  --watch, -w  Watch the filesystem for changes                           [布尔]
  --debug      Switch loaders to debug mode                               [布尔]
  --devtool    Enable devtool for better debugging experience (Example:
               --devtool eval-cheap-module-source-map)                  [字符串]
  -d           shortcut for --debug --devtool eval-cheap-module-source-map
               --output-pathinfo                                          [布尔]
  -p           shortcut for --optimize-minimize --define
               process.env.NODE_ENV="production"                          [布尔]
  --progress   Print compilation progress in percentage                   [布尔]

Module options:
  --module-bind       Bind an extension to a loader                     [字符串]
  --module-bind-post                                                    [字符串]
  --module-bind-pre                                                     [字符串]

Output options:
  --output-path                 The output path for compilation assets
                                        [字符串] [默认值: The current directory]
  --output-filename             The output filename of the bundle
                                                    [字符串] [默认值: [name].js]
  --output-chunk-filename       The output filename for additional chunks
        [字符串] [默认值: filename with [id] instead of [name] or [id] prefixed]
  --output-source-map-filename  The output filename for the SourceMap   [字符串]
  --output-public-path          The public path for the assets          [字符串]
  --output-jsonp-function       The name of the jsonp function used for chunk
                                loading                                 [字符串]
  --output-pathinfo             Include a comment with the request for every
                                dependency (require, import, etc.)        [布尔]
  --output-library              Expose the exports of the entry point as library
                                                                        [字符串]
  --output-library-target       The type for exposing the exports of the entry
                                point as library                        [字符串]

Advanced options:
  --records-input-path       Path to the records file (reading)         [字符串]
  --records-output-path      Path to the records file (writing)         [字符串]
  --records-path             Path to the records file                   [字符串]
  --define                   Define any free var in the bundle          [字符串]
  --target                   The targeted execution enviroment          [字符串]
  --cache                    Enable in memory caching
                          [布尔] [默认值: It's enabled by default when watching]
  --watch-stdin, --stdin     Exit the process when stdin is closed        [布尔]
  --watch-aggregate-timeout  Timeout for gathering changes while watching
  --watch-poll               The polling interval for watching (also enable
                             polling)                                     [布尔]
  --hot                      Enables Hot Module Replacement               [布尔]
  --prefetch                 Prefetch this request (Example: --prefetch
                             ./file.js)                                 [字符串]
  --provide                  Provide these modules as free vars in all modules
                             (Example: --provide jQuery=jquery)         [字符串]
  --labeled-modules          Enables labeled modules                      [布尔]
  --plugin                   Load this plugin                           [字符串]
  --bail                     Abort the compilation on first error         [布尔]
  --profile                  Profile the compilation and include information in
                             stats                                        [布尔]

Resolving options:
  --resolve-alias         Setup a module alias for resolving (Example:
                          jquery-plugin=jquery.plugin)                  [字符串]
  --resolve-extensions    Setup extensions that should be used to resolve
                          modules (Example: --resolve-extensions .es6 .js)[数组]
  --resolve-loader-alias  Setup a loader alias for resolving            [字符串]

Optimizing options:
  --optimize-max-chunks      Try to keep the chunk count below a limit
  --optimize-min-chunk-size  Try to keep the chunk size above a limit
  --optimize-minimize        Minimize javascript and switches loaders to
                             minimizing                                   [布尔]

Stats options:
  --color, --colors           Enables/Disables colors on the console
                                               [布尔] [默认值: (supports-color)]
  --sort-modules-by           Sorts the modules list by property in module
                                                                        [字符串]
  --sort-chunks-by            Sorts the chunks list by property in chunk[字符串]
  --sort-assets-by            Sorts the assets list by property in asset[字符串]
  --hide-modules              Hides info about modules                    [布尔]
  --display-exclude           Exclude modules in the output             [字符串]
  --display-modules           Display even excluded modules in the output [布尔]
  --display-max-modules       Sets the maximum number of visible modules in
                              output                                      [数字]
  --display-chunks            Display chunks in the output                [布尔]
  --display-entrypoints       Display entry points in the output          [布尔]
  --display-origins           Display origins of chunks in the output     [布尔]
  --display-cached            Display also cached modules in the output   [布尔]
  --display-cached-assets     Display also cached assets in the output    [布尔]
  --display-reasons           Display reasons about module inclusion in the
                              output                                      [布尔]
  --display-depth             Display distance from entry point for each module
                                                                          [布尔]
  --display-used-exports      Display information about used exports in modules
                              (Tree Shaking)                              [布尔]
  --display-provided-exports  Display information about exports provided from
                              modules                                     [布尔]
  --display-error-details     Display details about errors                [布尔]
  --verbose                   Show more details                           [布尔]

选项：
  --help, -h     显示帮助信息                                             [布尔]
  --version, -v  显示版本号                                               [布尔]
  --json, -j     Prints the result as JSON.                               [布尔]

```
* 我们在script中配置config。这样就可以在当前文件夹去执行，可以自动切换到src目录下面去webpack。`--config`是配置文件的路径，默认是`webpack.config.js 或 webpackfile.js`
```js
  "scripts": {
    "start": "set PORT=8080 & node ./bin/www",
    "webpack": "webpack --config=src/webpack.config.js"
    // 也可以不要等号 "webpack": "webpack --config src/webpack.config.js"
  },
```
### 安装onchange实现代码变动自动编译打包
* [onchange](https://www.npmjs.com/package/onchange)就是当某些文件改动的时候，就直接执行某个命令.
* **注意：Windows用户可能需要使用双引号而不是单引号。如果在npm脚本中使用，请记住转义双引号。**
* [npm插件“ onchange”无法识别scss文件更改](https://stackoverflow.com/questions/37261016/npm-plugin-onchange-does-not-recognize-scss-files-changes)
```sh
npm install onchange --dev
```
* 然后在script中增加watch
```sh
  "scripts": {
    "start": "set PORT=8080 & node ./bin/www",
    "webpack": "webpack --config=src/webpack.config.js",
    "watch": "onchange \"src/**/*.js\" \"src/**/*.less\" -- npm run webpack"
  },
```
* 只要src目录下面的后缀为js和less的文件发生变动就去执行后面的代码`npm run webpack`，也就是只要代码变动就会自动去打包。
* `src/**/*.js`代表src下面的所有js作为后缀的目录，`/**/*.js`不管层级有多深都全都选中。如果是`/*.js`只是当前路径下的后缀js文件。
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
### 切换不同的node.js版本
* 可以安装一个[n的依赖](https://www.npmjs.com/package/n)
* [node 版本切换工具 n 的使用](https://www.jianshu.com/p/a2ee8f61a8ca)
```sh
npm install n
```
* 但是在window里面可能不支持——[node.js使用npm install -g n更新node失败的问题](https://ask.csdn.net/questions/260842)
* [node 版本切换工具 n 的使用](https://www.jianshu.com/p/a2ee8f61a8ca)
* [npm install -g n 运行错误](https://blog.csdn.net/J_Y_X_8/article/details/71191493)
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