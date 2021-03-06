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
* 一个webpack能抵得上一个gulp和require.js
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
## 组件
### toast组件
* toast组件提示功能。在mod文件夹里面创建toast.js文件，因为用到了[JQuery](https://www.jquery123.com/html/)，所以把Jquery的代码引入到lib里面去。最后toast的代码为
```js
// require('less/toast.less');
var $=require('../lib/jquery-2.0.3.min.js')

function toast(msg, time){
  this.msg = msg;//消息内容
  this.dismissTime = time||1000;  //ms 消失的事件
  this.createToast();//创建toast节点函数
  this.showToast();//显示toast节点函数
}
toast.prototype = {
  createToast: function(){
    var tpl = '<div class="toast">'+this.msg+'</div>';
    this.$toast = $(tpl);
    $('body').append(this.$toast);
  },
  showToast: function(){
    var self = this;//这里要把this赋值给self，因为在下面的函数里面的this已经改变掉了
    console.log(self,'我是self')
    this.$toast.fadeIn(300, function(){//默认是隐藏的，300ms后出现
        console.log(self,'我是fadeIn里面的self')
        console.log(this,'我是fadeIn里面的this')
      setTimeout(function(){
         self.$toast.fadeOut(300,function(){//消失之后再过300ms后删除
            console.log(self,'我是fadeOut里面的self')
            console.log(this,'我是fadeOut里面的this')
           self.$toast.remove();
         });
      }, self.dismissTime);//dismissTime后消失
    });

  }
};

function Toast(msg,time){
  return new toast(msg, time);
}

window.Toast=Toast
console.log(Toast(),'我是Toast')

module.exports.Toast = Toast;
//不能module.exports= Toast; 因为左边的module.exports是一个对象，而右边的Toast是一个函数，如果Toast是一个对象那就可以赋值
```
#### Jquery的API
* 这里用到Jquery的API
  * 核心方法[jQuery()](https://www.w3school.com.cn/jquery/core_jquery.asp),可以直接在里面写html模板
  * [append() - 在被选元素的结尾插入内容](https://www.w3school.com.cn/jquery/jquery_dom_add.asp)
  * [jQuery 效果 - 淡入jQuery fadeIn()](https://www.w3school.com.cn/jquery/jquery_fade.asp)
  * [jQuery 效果 - 淡出jQuery fadeOut()](https://www.w3school.com.cn/jquery/jquery_fade.asp)
* 另外需要注意this经过函数之后是由变化的，请看下面结果，经过函数之后，this变为变化的DOM元素，而之前的this是整个toast对象。
```js
toast {msg: undefined, dismissTime: 1000, $toast: init(1)} "我是self"
index.js:92 toast {msg: undefined, dismissTime: 1000, $toast: init(1)} "我是fadeIn里面的self"
index.js:93 <div class=​"toast">​undefined​</div>​ "我是fadeIn里面的this"
index.js:111 toast {msg: undefined, dismissTime: 1000, $toast: init(1)} "我是Toast"
index.js:90 toast {msg: "hello world", dismissTime: 1000, $toast: init(1)} "我是self"
index.js:92 toast {msg: "hello world", dismissTime: 1000, $toast: init(1)} "我是fadeIn里面的self"
index.js:93 <div class=​"toast">​hello world​</div>​ "我是fadeIn里面的this"
index.js:96 toast {msg: undefined, dismissTime: 1000, $toast: init(1)} "我是self"
index.js:97 <div class=​"toast" style=​"display:​ none;​">​undefined​</div>​ "我是fadeOut里面的this"
index.js:96 toast {msg: "hello world", dismissTime: 1000, $toast: init(1)} "我是self"
index.js:97 <div class=​"toast" style=​"display:​ none;​">​hello world​</div>​ "我是fadeOut里面的this"
```
#### webpack的resolve
* 引入文件的写法有点麻烦
```js
var $=require('../lib/jquery-2.0.3.min.js')
```
* 我们通过修改webpack.config.js文件的[resolve](https://www.webpackjs.com/configuration/resolve/#resolve)来处理
```js
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),//如果引用的是jquery，那么就是后面的代码，当前目录加上js/lib/jquery-2.0.3.min.js,下面的一样
            mod: path.join(__dirname, "js/mod"),
            less: path.join(__dirname, "less")
        }
    },
```
* 这样我们引入就可以简化为
```js
// var $=require('../lib/jquery-2.0.3.min.js')
var $=require('jquery')//如果不写前面的额resolve，默认会去从node_modules里面去找
```
* 如果不写前面的额resolve，默认会去从node_modules里面去找
#### 更简化，使用插件ProvidePlugin
* 使用插件ProvidePlugin就可以自动加载模块，**而不必到处 import 或 require**。
* 在webpack.config.js里面增加
```js
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
```
* 用了上面的插件之后就可以不用写下面require代码啦
```js
var $=require('jquery')
```
* 因为前面的resolve的alias已经定义了别名，所以可以直接使用jquery。**如果没有定义别名需要从mod目录的的toast.js里面开始找到jquery代码**，那么就应该这么写,他是从使用$这个变量的地方开始引入，这里用的是mod下面的toast.js文件开始起步查找jquery-2.0.3.min.js
```js
    plugins: [
        new webpack.ProvidePlugin({
            // $: "jquery"
            $: "../lib/jquery-2.0.3.min.js"
        }),
    ]
```
#### less文件增加样式
* 并在less文件夹中创建toast.less
```less
.toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    color: #D15A39;
    background: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 1px rgba(255,255,255,0.6);
    display: none;
}
```
* 我们在webpack.config.js里面配置了别名less
```js
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
            mod: path.join(__dirname, "js/mod"),
            less: path.join(__dirname, "less")
        }
    },
```
* 那么在toast.less文件里面**开头以less开头引入就会自动导入**
```js
require('less/toast.less');
```
#### 安装less等依赖,主要less-loader 版本过高会报错
* 因为用到了less，首先我们需要先安装下面的依赖
```
$ npm i --dev css-loader less-loader less style-loader
+ less-loader@6.2.0
+ css-loader@3.6.0
+ less@3.11.3
+ style-loader@1.2.1
```
* 注意这里的less-loader版本过高会报错如下
```sh
ERROR in ./~/css-loader/dist/cjs.js!./~/less-loader/dist/cjs.js!./src/less/toast.less
Module build failed: TypeError: loaderContext.getResolve is not a function
```
* 修改为版本+ less-loader@4.1.0就可以解决了
```sh
+ less-loader@4.1.0
```
* 这个问题[我之前自己也碰到过](https://github.com/bomber063/Multiplayer-Sharing-blogs-for-Vue)
* 另外我也有别人碰到和我一样的问题也记录了
  * [Vue 中使用 less 报错 Module build failed: TypeError: loaderContext.getResolve is not a function](https://blog.csdn.net/wxx_csdn/article/details/105807127)
  * [Module build failed: TypeError: loaderContext.getResolve is not a function](https://www.cnblogs.com/zmdComeOn/p/12926330.html)
  * [vue---使用less报错 Module build failed: TypeError: loaderContext.getResolve is not a function](https://blog.csdn.net/maidu_xbd/article/details/105779377)
#### webpack的Rule.test和Rule.use
* 因为less在webpack里面是无法读取的，需要经过loader才可以，所以需要在webpack.config.js里面使用[Rule.use](https://www.webpackjs.com/configuration/module/#rule-use)和[Rule.test](https://www.webpackjs.com/configuration/module/#rule-test)
* test是匹配条件
  * Rule.test 是 Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。详细请查看 Rule.resource 和 Condition.test。
* 条件
[条件](https://www.webpackjs.com/configuration/module/#%E6%9D%A1%E4%BB%B6)可以是这些之一：

字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
正则表达式：test 输入值。
函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
条件数组：至少一个匹配条件。
对象：匹配所有属性。每个属性都有一个定义行为。
{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

{ include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

{ exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

{ and: [Condition] }：必须匹配数组中的所有条件

{ or: [Condition] }：匹配数组中任何一个条件

{ not: [Condition] }：必须排除这个条件
* Rule.use应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。可以有options可选项。
* 代码增加如下
```js
    module: {
        rules: [{
            test: /\.less$/,//这里用到正则,点在正则里面有特别的意义，所以需要斜杆来转义为自己的点的意思，也就是字面字符 '.'
            // \.less$表示匹配字符结束为.less,匹配输入的结束
            use: ["style-loader","css-loader", "less-loader"]//这个数组是从右往左的顺序执行加载loader.
            // postcss-loader是加前缀的https://www.jianshu.com/p/e7b42055ee5c，这个我没有增加。
            // less-loader官网的意思是把less编译为css,https://www.npmjs.com/package/less-loader
            // css-loader根据官网解释是处理import和url这样的外部资源https://www.npmjs.com/package/css-loader
            // 另一个博客解释https://www.cnblogs.com/wtsx-2019/p/12483265.html
            //style-loader官网说的是把它放到页面DOM上。https://www.npmjs.com/package/style-loader
            // 另一个博客解释 https://www.cnblogs.com/wtsx-2019/p/12483265.html
        }]
    },
```
* `test: /\.less$/`这里用到[正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions),点在正则里面有特别的意义，所以需要斜杆来转义为自己的点的意思，也就是字面字符 '.',`\.less$`表示匹配字符结束为.less,匹配输入的结束
* `use: ["style-loader","css-loader", "less-loader"]`这个数组是**从右往左的顺序执行加载**loader.
  * [postcss-loader](https://www.npmjs.com/package/postcss-loader)是加前缀的,可以看这里的[说明](https://www.jianshu.com/p/e7b42055ee5c)，这个我没有增加。
  * [less-loader](https://www.npmjs.com/package/less-loader)官网的意思是把less编译为css,
  * [css-loader](https://www.npmjs.com/package/css-loader)根据官网解释是处理import和url这样的外部资源,另一个[博客解释](https://www.cnblogs.com/wtsx-2019/p/12483265.html)
  * [style-loader](https://www.npmjs.com/package/style-loader)官网说的是把它放到页面DOM上。另一个[博客解释](https://www.cnblogs.com/wtsx-2019/p/12483265.html) 
#### less语法学习
* [less](https://less.bootcss.com/)（Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。这里呈现的是 Less 的官方文档（中文版），包含了 Less 语言以及利用 JavaScript 开发的用于将 Less 样式转换成 CSS 样式的 Less.js 工具。它也是**预编译**,也就是用之前需要提前编译一次，转化为CSS才可以使用。
  * [变量](https://less.bootcss.com/#%E5%8F%98%E9%87%8F%EF%BC%88variables%EF%BC%89)，它的好处就是如果网站风格发生改变，不需要改变太多地方，只需要修改这个变量就可以了。甚至可以让用户自己配置颜色，用户设置了变量未某个颜色，那么就显示某个颜色。
  * [混合](https://less.bootcss.com/#%E6%B7%B7%E5%90%88%EF%BC%88mixins%EF%BC%89)，有一些样式需要很多前缀，那么这个就比较方便。混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法，**类似于定义一个函数，函数里面还有一个默认值，然后使用函数名字就可以**
  * [嵌套](https://less.bootcss.com/#%E5%B5%8C%E5%A5%97%EF%BC%88nesting%EF%BC%89)代替层叠或与层叠结合使用的能力,也就是大括号里面可以继续写大括号。
  * [运算](https://less.bootcss.com/#%E8%BF%90%E7%AE%97%EF%BC%88operations%EF%BC%89)可以对任何数字、颜色或变量进行运算，定义好基准变量，后面就可以通过运算符去使用了。
  * [浏览器使用](https://less.bootcss.com/usage/#browser-usage)，就通过下面引入
    ```html
      <link rel="stylesheet/less" type="text/css" href="styles.less" />
      <script src="less.js" type="text/javascript"></script>
    ```
      * 但是一般我们不这么使用，因为还要浏览器去解析处理less.js和转换为为css代码。一般源代码我们用less，但是编写打包后是css，当用户看到的时候就是css
* [less老的文档](https://www.bootcss.com/p/lesscss/),这里面说的可以在 客户端 上运行是需要把less语法转换为css才可以在客户端运行。
* 普通的css是不可以定义变量，类似JS那样去编程的，但是less可以。
* src目录创建test.html就可以测试了
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="/js/index.js"></script>
</body>
</html>
```
* 现在这个toast组件就完成了，有样式也有交互，而且通过`Toast()`可以直接调用.
### event 事件中心发布订阅组件
* 具体代码及代码注释
```js

  var EventCenter = (function(){

    var events = {};

    function on(evt, handler){//绑定事件函数，evt是某一个事件名字，handler是事件执行函数
      events[evt] = events[evt] || []; //如果传过来的参数events[evt]事件里面没有，那创建一个空数组赋值，如果events[evt]事件里面已经有一个自己的事件了，就为自己

      events[evt].push({//往前面创建的空数组  或者已经存在的数组里面的events[evt]里面尾部push事件
        handler111: handler//events[evt]事件的名字都是handler111，里面的执行函数是传过来的handler
      });
    }

    function fire(evt, args){//触发事件函数
        console.log(args,'args')
      if(!events[evt]){
        return;
      }
      for(var i=0; i<events[evt].length; i++){
        //   console.log(events)//events是一个对象
        //   console.log(events[evt])//events[evt]是一个数组
          console.log(events[evt][i].handler111,'handler111')
          console.log(events[evt][i].handler111(),'handler111()')
          console.log(events[evt][i].handler111(args),'handler111(args)')
          //这里的args是绑定事件on里面传参用的，绑定事件里面的handles里面的参数。
        events[evt][i].handler111(args);//events[evt][i]是因为，如果是同一个事件被多次使用就会出现[i]这个选项。如果只有一次，那么i从0开始计数就结束了。
      }
      
    }

    return {
      on: on,
      fire: fire
    }
  })();

  module.exports = EventCenter;//因为EventCenter本身是一个对象，所以可以直接赋值给modules.exports
  // EventCenter.on('text-change', function(data){
  //  console.log(data);
  // });
  
  // EventCenter.on('text-change', function(data){
  //  alert(1);
  // });
  

  // EventCenter.fire('text-change', 100);

```
* 这个地方的**fire是触发事件**，第二个参数的意思是给绑定的on传递一个额外的参数，比如我在app.js里面的index.js代码是这样的
```js
var Toast=require('../mod/toast.js').Toast//因为require()返回的是module.exports对象，但是我们需要里面的Toast属性
var event=require('../mod/event.js')

Toast('hello world')


event.on('click',function(a){
    return a+' click第一次'
})

event.on('click',function(a){
    return a+' click第二次'
})


event.on('touch',function (a){
    return a+' touch第一次'
})

event.fire('click','click-a')

event.fire('touch','touch-b')
```
* 那么最后执行的时候会把这个fire里面的第二个参数`click-a`和`touch-b`传入进去，可以看到前面的fire函数里面的`console.log()`输出的结果,可以看到如果不加args会出现undefined，**因为前面的on绑定的函数里面有形参**
```sh
click-a args
index.js:94 ƒ (a){

    return a+' click第一次'
} "handler111"
index.js:95 undefined click第一次 handler111()
index.js:96 click-a click第一次 handler111(args)
index.js:94 ƒ (a){
    // console.log(a)
    return a+' click第二次'
} "handler111"
index.js:95 undefined click第二次 handler111()
index.js:96 click-a click第二次 handler111(args)
index.js:87 touch-b args
index.js:94 ƒ (a){
    return a+' touch第一次'
} "handler111"
index.js:95 undefined touch第一次 handler111()
index.js:96 touch-b touch第一次 handler111(args)
```
### 瀑布流布局组件
* 创建一个waterfall.js用于瀑布流布局函数，具体说明及代码
```js
var WaterFall = (function(){
    var $ct;
    var $items;
  
    function render($c){
      $ct = $c;
      $items = $ct.children();// 直接子元素,如果是孙元素就不行了。孙元素要用find(),https://www.runoob.com/jquery/jquery-traversing-descendants.html
      // console.log($ct)
      // console.log($items)
  
      var nodeWidth = $items.outerWidth(true);//外部宽度 包括了margin https://www.runoob.com/jquery/html-outerwidth.html
      // console.log(nodeWidth,'nodeWidth')
        colNum = parseInt($(window).width()/nodeWidth),//parseInt是会省略掉小数点后面的值，比如3.5只会得到3.window的宽度除以标签的宽度colNum就是一行可以放几个
        // console.log($(window).width(),'$(window).width()')
        // console.log(colNum)
        colSumHeight = [];//一个数组，作用是设置标签距离顶部高度使用
  
      for(var i = 0; i<colNum;i++){
        colSumHeight.push(0);//列数有几个就会push几个0到数组里面去，但是返回的是长度，本身数组是有多个0组成的数组。
        // console.log(colSumHeight.length,'colSumHeight.length')
        // console.log(colNum,'colNum')
        // console.log(colSumHeight.length/colNum,'colSumHeight.length/colNum')
      }
      console.log(colSumHeight)
  
      $items.each(function(){//each() 方法为每个匹配元素规定要运行的函数。 https://www.runoob.com/jquery/traversing-each.html
        // console.log(x,'x')
        // console.log(this,'this')
        var $cur = $(this);//所有子元素赋值给$cur,this就是匹配的当前元素。
  
        //colSumHeight = [100, 250, 80, 200]
  
        var idx = 0,
          minSumHeight = colSumHeight[0];//默认第一个
          // console.log(minSumHeight,'minSumHeight')

        for(var i=0;i<colSumHeight.length; i++){//这里是某一行的元素的进行循环，比如一共有5个元素，但是第一行只有4个元素，那么就先循环第一行的4个元素，然后跳出该循环进行后面的代码，然后第5个元素在进行该循环，然后再进行后面代码的执行，这里要跟第52行代码结合起来看，
          // 是为了找出一行中距离顶部的最小值
          // console.log(colSumHeight[i],`if外部colSumHeight[${i}]`)
          if(colSumHeight[i] < minSumHeight){
            // console.log(colSumHeight[i],`if内部colSumHeight[${i}]`)// 第52的代码会影响这里的数值
            idx = i;
            minSumHeight = colSumHeight[i];//一行中找出距离顶部的最小高度给50行代码使用
          }
        }
        console.log(minSumHeight,'minSumHeight')
  
        $cur.css({
          left: nodeWidth*idx,//距离左边是一个标签的高度加上第几个
          top: minSumHeight//用前面for循环找出一行中的距离顶部的最小高度
        });
        //把前面找出的距离顶部的最小值的高度修改为元素自己的高度如果是第二行就是元素自己的高度加上第一行的高度，这句话的代码的意思是为了让自己不成为最小值。并且为后续的元素的高度保持一个高度。
        colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
        // console.log(colSumHeight[idx],`colSumHeight[${idx}]`)
      });
    }
  
  
    $(window).on('resize', function(){//当改变窗口大小的时候重新执行render函数，也就是重新进行瀑布流布局
      render($ct);
    })
  
  
    return {
      init: render
    }
  })();
  
  module.exports = WaterFall//因为modules.export是对象，WaterFall也是一个对象，所以可以赋值。
```
* **最重要的关注这里,给CSS设置距离顶部的距离minSumHeight和距离左边的距离nodeWidth*idx**
```js
    $cur.css({
      left: nodeWidth*idx,//距离左边是一个标签的高度加上第几个
      top: minSumHeight//用前面for循环找出一行中的距离顶部的最小高度
    });
```
* 这里用到jquery的API
  *  [children()](https://www.runoob.com/jquery/jquery-traversing-descendants.html)直接子元素,如果是孙元素就不行了。孙元素要用[find()](https://www.runoob.com/jquery/jquery-traversing-descendants.html)
  * [outerWidth(true)](https://www.runoob.com/jquery/html-outerwidth.html)外部宽度 包括了margin
  * [jQuery each() 方法](https://www.runoob.com/jquery/traversing-each.html)为每个匹配元素规定要运行的函数
  * [jQuery width() 方法](https://www.runoob.com/jquery/css-width.html)设置或返回被选元素的宽度
### 一个便利贴组件note.js
* 在mod文件夹中创建note.js文件，并在less文件夹中创建note.less
* note.js代码及注释说明
```js
require('less/note.less');

var Toast = require('./toast.js').Toast;//有一些需要发网络请求，不管成功与否就可以通过Toast给页面展示提示。
var Event = require('mod/event.js');//主要用到绑定事件和触发事件用，类似发布订阅模式。通过调用别的事件函数，这里就是瀑布流事件waterfall.js，在index.js里面
// 如果把toast.js也变成一个立即执行函数并返回一个对象，那么也可以通过Event来绑定和触发该toast事件。
console.log(Event)

//对于一个note需要大致如下几个参数：
// 1——id，用于辨别很多便利贴中的哪一个便利贴。
// 2——文本

function Note(opts){//Note本身是一个构造函数
  this.initOpts(opts);
  this.createNote();
  this.setStyle();
  this.bindEvent();
}

Note.prototype = {
  colors: [//默认的一些随机颜色，当然还可以增加旋转的角度，还可以放一个钉子一样的更像便利贴，还可以把它换成一个便利贴的图片。当然便利贴图片的高度是固定的，没法随着内容变化而变化，可以通过dribble网站去找设计图https://dribbble.com/search/sticky%20note%3B
    ['#ea9b35','#efb04e'], // headColor, containerColor
    ['#dd598b','#e672a2'],
    ['#eee34b','#f2eb67'],
    ['#c24226','#d15a39'],
    ['#c1c341','#d0d25c'],
    ['#3f78c3','#5591d2']
  ],
  id:'',//这是我自己增加的id，老师的代码里面没有这个id设置的默认值。

  defaultOpts: {
    id: '',   //Note的 id
    $ct: $('#content').length>0?$('#content'):$('body'),  //默认存放 Note 的容器
    context: 'input here'  //Note 的内容
  },

  initOpts: function (opts) {
    this.opts = $.extend({}, this.defaultOpts, opts||{});//extend方法，https://www.runoob.com/jquery/misc-extend.html
    // jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象。

// 注意：1. 如果只为$.extend()指定了一个参数，则意味着参数target被省略。此时，target就是jQuery对象本身。通过这种方式，我们可以为全局对象jQuery添加新的函数。
// 2. 如果多个对象具有相同的属性，则后者会覆盖前者的属性值。
    if(this.opts.id){
      // console.log(this.opts.id)
      // console.log(this.id)
       this.id = this.opts.id;
      //  console.log(this.id)
    }
  },

  createNote: function () {
    var tpl =  '<div class="note">'
              + '<div class="note-head"><span class="username"></span><span class="delete">&times;</span></div>'
              + '<div class="note-ct" contenteditable="true"></div>'
              +'</div>';
              // 全局属性 contenteditable  是一个枚举属性，表示元素是否可被用户编辑。 如果可以，浏览器会修改元素的部件以允许编辑。https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/contenteditable
    this.$note = $(tpl);
    this.$note.find('.note-ct').text(this.opts.context);//find() 方法返回被选元素的后代元素，一路向下直到最后一个后代 https://www.runoob.com/jquery/jquery-traversing-descendants.html
    // text() 方法设置或返回被选元素的文本内容https://www.runoob.com/jquery/html-text.html
    this.$note.find('.username').text(this.opts.username);
    this.opts.$ct.append(this.$note);//append() 方法在被选元素的结尾插入指定内容
    //https://www.runoob.com/jquery/html-append.html
    if(!this.id)  this.$note.css('bottom', '100px');  //如果是不是新的的，那么就没有id传入，这样这个note的高度可以接近最底部100px
    // console.log(this.$note.css('bottom'))
  },

  setStyle: function () {
    var color = this.colors[Math.floor(Math.random()*6)];//Math.floor 返回小于或等于一个给定数字的最大整数。Math.floor() === 向下取整
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    //Math.random() 函数返回一个浮点,  伪随机数在范围从0到小于1 ,https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //因为有6种颜色所以*6
    this.$note.find('.note-head').css('background-color', color[0]);//把头部颜色设置为第一个选项
    this.$note.find('.note-ct').css('background-color', color[1]);//把内容的颜色设置为第二个选项
  },

  setLayout: function(){//这个的作用是用于失去焦点及粘贴后触发瀑布流效果
    var self = this;
    if(self.clk){
      clearTimeout(self.clk);
    }
    self.clk = setTimeout(function(){
      Event.fire('waterfall');
      //index.js里面通过Event.on在绑定了waterfall事件
    },100);
  },

  bindEvent: function () {//绑定事件
    console.log(this,'this')
    var self = this,
        $note = this.$note,
        $noteHead = $note.find('.note-head'),
        $noteCt = $note.find('.note-ct'),
        $delete = $note.find('.delete');

    $delete.on('click', function(){//点击删除按钮触发删除事件
      self.delete();
    })

    //contenteditable没有 change 事件，所有这里做了模拟通过判断元素内容变动，执行 save
    $noteCt.on('focus', function() {//聚焦的时候触发
      if($noteCt.html()=='input here') $noteCt.html('');//前面设置的默认内容是input here，如果内容是默认的input here就在聚焦的时候清空内容
      $noteCt.data('before', $noteCt.html());//jQuery.data()函数在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。
      // https://www.jquery123.com/data/
      //这里就是把元素$noteCt里面设置一个临时key是before，它的值是$noteCt.html()
      // .html()获取集合中第一个匹配元素的HTML内容，https://www.jquery123.com/html/
      console.log($noteCt.data('before'),'$noteCt.data(before)')
    }).on('blur paste', function() {//当失去焦点(也就是输入完成后离开输入框)或者粘贴的是时候触发
      // console.log('失去焦点或者粘贴')
      if( $noteCt.data('before') != $noteCt.html() ) {//如果before这个临时key里面的值不等于$noteCt.html()那就按照下面的代码把这个before临时key设置为$noteCt.html()
        $noteCt.data('before',$noteCt.html());//把临时before这个key设置为$noteCt.html()
        self.setLayout();//触发瀑布流事件效果
        if(self.id){//如果存在id就是执行编辑事件
          self.edit($noteCt.html())
        }else{//不存在id就执行增加事件
          self.add($noteCt.html())
        }
      }
    });

    //设置笔记note的随着鼠标点击后拖动效果
    $noteHead.on('mousedown', function(e){
      var evtX = e.pageX - $note.offset().left,   //evtX 计算事件的触发点在 dialog内部到 dialog 的左边缘的距离
      //event.pageX鼠标点击位置相对于文档的左边缘的位置（左边）,https://www.jquery123.com/event.pageX/
      //.offset()在匹配的元素集合中，获取的第一个元素的当前坐标，或设置每一个元素的坐标，坐标相对于文档,.offset()返回一个包含top 和 left属性的对象 。
      //https://www.jquery123.com/offset/
          evtY = e.pageY - $note.offset().top;//evtY 计算事件的触发点在 dialog内部到 dialog 的顶部边缘的距离
          console.log(e.pageY,'e,pageY')
          console.log($note.offset().top,'$note.offset().top')
      $note.addClass('draggable').data('evtPos', {x:evtX, y:evtY}); //把事件到 dialog 前面左边和顶部边缘的距离保存下来，保存的key为evtPos,在拖动的过程中增加一个class 为draggable，为了拖动的时候有一个特效，这里就是颜色变浅，也就是透明度变大
      // console.log($('.draggable').data('evtPos'),'$(.draggable).data(evtPos)')
      // console.log($('.draggable').data('pos'),'$(.draggable).data(pos)')
    }).on('mouseup', function(){
      //这个pos老师不是写错了，应该是evtPos
      //  $note.removeClass('draggable').removeData('pos');//鼠标松开的时候移除掉draggable这个class，并且移除临时变量pos
       $note.removeClass('draggable').removeData('evtPos');//鼠标松开的时候移除掉draggable这个class，也就是透明度恢复原来的样子。并且移除前面的临时变量evtPos
      //  console.log($('.draggable').data('evtPos'),'$(.draggable).data(evtPos)')
      //  console.log($('.draggable').data('pos'),'$(.draggable).data(pos)')
       //.removeData()在元素上移除绑定的数据
       //https://www.jquery123.com/removeData/
    });
    $('body').on('mousemove', function(e){//鼠标移除的时候最好设置在整个body上面，因为如果逃出匹配元素也逃脱不了body,这样就不会出现bug
      // console.log($('.draggable').length)
      // $('.draggable').length&&console.log(e.pageY-$('.draggable').data('evtPos').y,'e.pageY-$(.draggable).data(evtPos).y')

      $('.draggable').length && $('.draggable').offset({//$('.draggable').length就是拖动存在的时候会使1，那么就会转化为ture，不存在是0，会转化为false，存在的前提下载去执行&&后面的代码$('.draggable').offset
      // offset()会返回top和left
        top: e.pageY-$('.draggable').data('evtPos').y,  
        // e.pageY是匹配的鼠标点击位置距离顶部的距离，
        //$('.draggable').data('evtPos').y也就是evtY，它是 计算事件的触发点在 dialog内部到 dialog 的顶部边缘的距离
        // 前面两个的差值 就是top 匹配元素距离顶部的位置距离顶部的距离，下面的距离左部的距离同理
        // 当用户鼠标移动时，根据鼠标的位置和前面保存的距离，计算 dialog 的绝对位置
        left: e.pageX-$('.draggable').data('evtPos').x
      });
    });
  },
//下面都是一些请求
  edit: function (msg) {
    var self = this;
    $.post('/api/notes/edit',{//jQuery.post（）使用HTTP POST请求从服务器加载数据。
      // https://api.jquery.com/jQuery.post/#jQuery-post-url-data-success-dataType
      //https://jquery.cuishifeng.cn/jQuery.post.html
        id: this.id,//编辑的哪一个id
        note: msg//编辑的内容
      }).done(function(ret){
        //当延迟成功时调用一个函数或者数组函数.
        //比如一旦jQuery.get方法返回一个来自延迟的对象的jqXHR对象，我们可以附加一个成功回调使用.done方法。
        // https://api.jquery.com/deferred.done/#deferred-done-doneCallbacks-doneCallbacks
        // https://jquery.cuishifeng.cn/deferred.done.html
      if(ret.status === 0){
        Toast('update success');
      }else{
        Toast(ret.errorMsg);
      }
    })
  },

  add: function (msg){
    console.log('addd...');
    var self = this;
    $.post('/api/notes/add', {note: msg})//新增的需要提供内容。
      .done(function(ret){
        if(ret.status === 0){
          Toast('add success');
        }else{
          self.$note.remove();
          // // remove()从DOM中删除所有匹配的元素。 https://jquery.cuishifeng.cn/remove.html
          Event.fire('waterfall')//add失败为什么要触发瀑布流？？成功都不需要触发，这里我觉得也不需要触发，因为没有新增东西。
          // index.js里面通过Event.on在绑定了waterfall事件
          Toast(ret.errorMsg);
        }
      });
    //todo
  },

  delete: function(){
    var self = this;
    $.post('/api/notes/delete', {id: this.id})//删除需要提供删除哪一个id
      .done(function(ret){
        if(ret.status === 0){
          Toast('delete success');
          self.$note.remove();
          // remove()从DOM中删除所有匹配的元素。 https://jquery.cuishifeng.cn/remove.html
          Event.fire('waterfall')//因为少了一个，所以最好触发一下瀑布流
          // index.js里面通过Event.on在绑定了waterfall事件
        }else{
          Toast(ret.errorMsg);
        }
    });

  }

};

module.exports.Note = Note;

//使用 只需要new Note()传参数即可，比如
// var a=new Note({
  // id: '',
  // context: 'article.text',
  // username: 'article.username'
// });
// 然后可以把瀑布流事件绑定和触发
// Event.on('waterfall', function(){
  // WaterFall.init($('#content'));
// })//这里绑定之后，还需要下面的触发fire

// Event.fire('waterfall')//fire触发
```
* app.js里面的index.js代码为
```js
var Toast=require('../mod/toast.js').Toast//因为require()返回的是module.exports对象，但是我们需要里面的Toast属性
var Event=require('../mod/event.js')
var WaterFall=require('../mod/waterfall')
var Note=require('../mod/note').Note

Toast('hello world')

var a=new Note({
    id: '',
    // context: 'article.text',
    username: 'article.username'
  });

  console.log(a)

  Event.on('waterfall', function(){
    WaterFall.init($('#content'));
  })//这里绑定之后，还需要下面的触发fire

  Event.fire('waterfall')//fire触发
```
* 大致功能及说明
  * 对于一个note需要大致如下几个参数： 
    * 1——id，用于辨别很多便利贴中的哪一个便利贴。
    * 2——文本
  * 自己的随机颜色colors
  * 默认参数
    ```js
      defaultOpts: {
        id: '',   //Note的 id
        $ct: $('#content').length>0?$('#content'):$('body'),  //默认存放 Note 的容器
        context: 'input here'  //Note 的内容
      },
    ```
  * createNote,创建note里面用到的
    * [全局属性 contenteditable](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)  是一个枚举属性，表示元素是否可被用户编辑。 如果可以，浏览器会修改元素的部件以允许编辑。
    * [find()](https://www.runoob.com/jquery/jquery-traversing-descendants.html) 方法返回被选元素的后代元素，一路向下直到最后一个后代 
    * [text()](https://www.runoob.com/jquery/html-text.html) 方法设置或返回被选元素的文本内容
    * [append()](https://www.runoob.com/jquery/html-append.html) 方法在被选元素的结尾插入指定内容
  * setStyle,这里主要设置颜色。设置样式里面用到的
    * [Math.floor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 返回小于或等于一个给定数字的最大整数。Math.floor() === 向下取整
    * [Math.random()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 函数返回一个浮点,  伪随机数在范围从0到小于1.
  * setLayout，这里主要设置瀑布流效果。设置的布局里面用到`Event.fire('waterfall');`,触发瀑布流
  * bindEvent绑定事件。
    * [jQuery.data()](https://www.jquery123.com/data/)函数在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。
    * [.html()](https://www.jquery123.com/html/)获取集合中第一个匹配元素的HTML内容.
  * 设置笔记note的随着鼠标点击后拖动效果
    * [event.pageX](https://www.jquery123.com/event.pageX/)鼠标点击位置相对于文档的左边缘的位置（左边）.
    * 
  * edit编辑请求，add增加请求，delete删除请求。
    * [jQuery.post（）](https://api.jquery.com/jQuery.post/#jQuery-post-url-data-success-dataType)使用HTTP POST请求从服务器加载数据。[另一个文档说明jQuery.post（）](https://jquery.cuishifeng.cn/jQuery.post.html)
    * [deferred.done](https://api.jquery.com/deferred.done/#deferred-done-doneCallbacks-doneCallbacks)当延迟成功时调用一个函数或者数组函数.比如一旦jQuery.get方法返回一个来自延迟的对象的jqXHR对象，我们可以附加一个成功回调使用.done方法。[另一个解释deferred.done](https://jquery.cuishifeng.cn/deferred.done.html)
    * [remove()](https://jquery.cuishifeng.cn/remove.html)从DOM中删除所有匹配的元素。 
### 刚开始进入页面的时候创建所有已经有的便利贴node组件note-manager.js
* 代码为
```js
var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
// var Toast = require('./toast.js').Toast;
var Event = require('mod/event.js');


var NoteManager = (function(){

  function load() {
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
            console.log($.each)
          $.each(ret.data, function(idx, article) {
            //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
            // https://www.jquery123.com/jQuery.each/
            // 也就是遍历第一个参数ret.data
              new Note({
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });


  }

  function add(){
    new Note();
  }

  return {
    load: load,
    add: add
  }

})();

module.exports.NoteManager = NoteManager
```
* 主要是用到`$.each()`,[$.each()](https://www.jquery123.com/jQuery.each/)函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象,也就是遍历第一个参数ret.data
```js
      $.each(ret.data, function(idx, article) {
        //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
        // https://www.jquery123.com/jQuery.each/
        // 也就是遍历第一个参数ret.data
```
* **这里的add和前面的note.js里面的add有什么区别**
```js
  function add(){//这个add和node.js里面的add有什么区别？
    new Note();
  }
```
* 最后首页app目录下的index.js里面代码为
```js
var Event=require('../mod/event.js')
var WaterFall=require('../mod/waterfall')
var NoteManager = require('mod/note-manager.js').NoteManager;
// NoteMangeer里面已经引入了note组件

NoteManager.load();

$('.add-note').on('click', function() {//首页点击添加按钮的时候执行add函数
  NoteManager.add();
})

Event.on('waterfall', function(){
  WaterFall.init($('#content'));
})//这里绑定之后，还需要下面的触发fire

Event.fire('waterfall')//fire触发
```
* 经过测试add和前面的note.js里面的add有什么区别:
  * note.js里面的代码和note-manager.js里面的代码发请求的路由不一样。note-manager.js是`/api/notes`,note.j是`/api/notes/add`.
  * note.js里面的代码add后只是有一个toast弹出提醒，他们都会new note()
  * 在note.js中只有这里blur或者paste的时候，并且self.id不存在的时候才会调用add函数。
```js
$('.add-note').on('click', function() {//首页点击添加按钮的时候执行add函数
  // NoteManager.add();//这里的路由是/api/notes，它是没有参数，就是类似于直接new Note();
  new Note(    {
    id: 1,   
  context: 'i1' 
}).add()//这里的路由是/api/notes/add
})

//只有这里blur或者paste的时候，并且self.id不存在的时候才会调用add函数。
    $noteCt.on('focus', function() {//聚焦的时候触发
      if($noteCt.html()=='input here') $noteCt.html('');//前面设置的默认内容是input here，如果内容是默认的input here就在聚焦的时候清空内容
      $noteCt.data('before', $noteCt.html());//jQuery.data()函数在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。
      // https://www.jquery123.com/data/
      //这里就是把元素$noteCt里面设置一个临时key是before，它的值是$noteCt.html()
      // .html()获取集合中第一个匹配元素的HTML内容，https://www.jquery123.com/html/
      // console.log($noteCt.data('before'),'$noteCt.data(before)')
    }).on('blur paste', function() {//当失去焦点(也就是输入完成后离开输入框)或者粘贴的是时候触发
      // console.log('失去焦点或者粘贴')
      if( $noteCt.data('before') != $noteCt.html() ) {//如果before这个临时key里面的值不等于$noteCt.html()那就按照下面的代码把这个before临时key设置为$noteCt.html()
        $noteCt.data('before',$noteCt.html());//把临时before这个key设置为$noteCt.html()
        self.setLayout();//触发瀑布流事件效果
        if(self.id){//如果存在id就是执行编辑事件
          self.edit($noteCt.html())
        }else{//不存在id就执行增加事件
          self.add($noteCt.html())
        }
      }
    });
```
## 后台接口
* 在views里面创建模板index.ejs,这里用的ejs模板引擎。**index.ejs文件不可以用HTML或者js的注释**。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- <meta property="qc:admins" content="4562636714562571563145" /> -->
    <title>便利贴</title>
    <link rel="stylesheet" href="/css/index.css">
  </head>
  <body>
    <div id="header">
      <a class="add-note" title="添加笔记" href="#"><span class="fa fa-plus"></span> 添加</a>
      <ul class="user-area">

          <li><a class="login" title="GitHub登录" href="/auth/github"> GitHub登录</a>
          </li>
          <li><a class="login" title="饥人谷登录" href="/auth/jirengu"> 饥人谷登录</a>
          </li>
      </ul>

    </div>
    <div id="content">

    </div>

    <div class="stars"></div>
    <script src="/js/index.js"></script>
<!--     <div class="twinkling"></div> -->
  </body>
</html>
```
* 跟普通的HTML有不同的地方就会有数据的使用，是把数据和模板结合起来的。
* 代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta property="qc:admins" content="4562636714562571563145" />
    <title>便利贴</title>
    <link rel="stylesheet" href="/css/index.css">
  </head>
  <body>
    <div id="header">
      <a class="add-note" title="添加笔记" href="#"><span class="fa fa-plus"></span> 添加</a>
      <ul class="user-area">
       <% if (isLogin){ %>
          <li><img src="<%= user.avatar %>" alt=""></li>
          <li><span title="<%= user.username %>"><%= user.username %></span></li>
          <li><span class="line"> | </span> </li>
          <li><a class="logout" href="/auth/logout">注销</a></li>
        <%} else { %>
          <li><a class="login" title="GitHub登录" href="/auth/github"> GitHub登录</a>
          </li>
        <% } %>
      </ul>

    </div>
    <div id="content">

    </div>

    <div class="stars"></div>
    <script src="/js/index.js"></script>
<!--     <div class="twinkling"></div> -->
  </body>
</html>
```
* 主要看这段代码就是如果登陆了就展示什么内容，类似js的方法,实际就是用户如何登陆如何展示的这样一个逻辑。
```html
      <ul class="user-area">
       <% if (isLogin){ %>
       <!-- 如果登陆就展示下面信息，类似js的方法 -->
          <li><img src="<%= user.avatar %>" alt=""></li>
          <!-- 这里面有=符号，就相当于去获取一个值，然后替换这个值 -->
          <li><span title="<%= user.username %>"><%= user.username %></span></li>
          <li><span class="line"> | </span> </li>
          <li><a class="logout" href="/auth/logout">注销</a></li>
        <%} else { %>//否则展示下面信息
          <li><a class="login" title="GitHub登录" href="/auth/github"> GitHub登录</a>
          </li>
        <% } %>
      </ul>
```
* 这里主页的样式增加在less目录下面的index.less里面。**这里面的背景图片已经不能使用了**
```less
/* 这里的背景图片已经没有了 */
  .stars {
    background:#000 url(http://7xpvnv.com2.z0.glb.qiniucdn.com/ba25c630-1c91-4ac1-a3de-65555d78c147.png) repeat top center;
    z-index:-2;
  }
  /* 这里的背景图片已经没有了 */
  .twinkling{
    background:transparent url(http://7xpvnv.com2.z0.glb.qiniucdn.com/493b97e6-c499-4b41-a26b-8942873615b0.png) repeat top center;
    z-index:-1;
    animation:move-twink-back 200s linear infinite;
  }
```
* 我另外上传了别的背景图片
```less
  .stars {//修改为别的背景图片
    background:#000 url(https://s1.ax1x.com/2020/07/17/UyUuFO.png) repeat top center;
    z-index:-2;
  }
```
* 样式稍微修改增加了上面按钮的背景颜色，后面的按钮样式也可以修改下，**因为不居中**
```less
  #header {
    height: 30px;
    font-size: 12px;
    background:#323846;//背景颜色
  }
```
### 增加后台接口的请求对应的响应和路由
* 路径可以随意定，但是为了规范及保持统一就按照下面的格式写。
* 所有的AJAX请求以api开头，所有的页面请求不以api开头
* 接口：
  * AJAX请求（[curd增删改查](https://baike.baidu.com/item/CURD/3031761?fr=aladdin)，或者叫做[restful 架构风格的curd（增删改查）](https://www.cnblogs.com/duguangming/p/11047839.html)）
    1. 获取所有的note：GET方法。路径`/api/notes`.
        * 后台响应一般就是成功或者失败，然后传回对应的参数`res:{status:0，data:[{},{}]}`代表成功，如果是0以外的值，比如1，2，3等就是失败的。只不过失败的原因不同。另一个参数就是数据data，是一个数组，里面有不同的数据，每一个数据就是一个note。如果失败的了参数比如`{status:1,errorMsg:'失败的原因'}`
        * 所以如果status为0就可以把data获取到。如果status为1，就可以知道失败的原因(errorMsg)。
    2. 创建一个note,创建需要一个参数，那么后面的就是参数: 内容比较多，如果用get方法会拼接成url，可能放不下，而且安全性不好，所以这里用POST方法。路径`/api/notes/add`，参数`req:{note:'hello world'}`
        * 后台响应，如果成功就是`{status:0}`,失败了就是`{status:1或者2或者3，不是0都可以,errorMsg:'失败的原因'}`
    3. 修改一个note,POST方法(原因跟上面的一样)，路径`/api/notes/edit`,也需要传递参数`req:{note:'new note',id:100}`,需要传递id，因为要告诉后台你修改的是哪一个note。
        * 后台响应跟前面的类似
    4. 删除一个note.POST方法(原因跟上面一样)，路径`/api/notes/delete`,传递的参数`req:{id:100}`，只需要知道是删除哪一个note就可以，所以只需要一个id参数。
        * 后台响应跟前面的类似
  * 页面请求
    1. 我的页面，路径不用api,就是`/user`，这不是AJAX请求。
* **前面的这些就是你作为一个前端开发工程师，跟后台去约定接口，这一步需要与后台讨论，当然也可以后台定下来告诉前端。或者前端工程师定下来告诉后台。但是双方需要相互知晓。要知道调用什么接口，发什么接口对应的路径，发送的数据和响应的数据，对于后台来说每一条api和路由对应的都是后台的一个功能。**
* **作为后台工程师如何去实现前面的功能： 前面的功能主要对应的就是路由。主要就是去修改app.js里面的路由**。
### 修改app.js里面的路由配置
* 为了不让app.js里面的路由导致app.js文件越来越大，就可以把第二级目录做成一个组件或者文件对应的函数处理。
```js
app.use('/api',api)//如果路由以api开头就交由api对应的组件或者文件对应的函数去处理
```
* 然后api对应的文件api.js的代码。
```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```
* 对应的api路径就不用去修改app.js文件，只需要在这里修改即可
```js
var express = require('express');
var router = express.Router();

/* 前端发的请求都会到这里对应的路由去执行响应的函数 */
/* 获取所有notes */
router.get('/notes', function(req, res, next) {
  console.log('/notes');
});
/* 创建note */
router.post('/notes/add', function(req, res, next) {
  res.send('respond with a resource');
});
/* 修改note */
router.post('/notes/edit', function(req, res, next) {
  res.send('respond with a resource');
});
/* 删除note */
router.post('/notes/delete', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```
### 测试前后端代码，前端发请求，对应的路由后端有响应
* 这里我们做一个测试，**因为主页里面里面webpack启动的前端部分的app目录下index.js是入口**,有一段代码
```js
NoteManager.load();
```
* 而对应的文件note-manager.js代码里面有对应的路由是`/api/notes`
```js
  function load() {//页面刚进来需要向服务器发请求去得到所有数据，然后加载所有数据渲染让用户看到
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
            console.log($.each)
          $.each(ret.data, function(idx, article) {
            //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
            // https://www.jquery123.com/jQuery.each/
            // 也就是遍历第一个参数ret.data
              new Note({
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });
```
* 前面的webpack启动的src目录里面的app.js是前端部分发请求的路由为`/api/notes`的请求
* 然后就到了后端的routes目录里面的api.js里面的对应的`/api/notes`路由，代码为
```js
/* 获取所有notes */
router.get('/notes', function(req, res, next) {//这里是二级路由，一级路由在最外面的app.js文件里面，组合起来就是/api/notes路由
  console.log('/notes');
});
```
* 于是就可以看到在node.js的控制台里面会打出下面的语句，说明测试成功了。
```js
/notes
```
### 后端使用前端的参数举例
* 比如前端在src目录下面的mod里面的note.js里面的add函数,有一个参数note为1`$.post('/api/notes/add', {note: '1'})`
```js
  add: function (msg){
    console.log('addd...');
    var self = this;
    $.post('/api/notes/add', {note: '1'})//新增的需要提供内容。如果成功下面只是弹出toast提醒你成功了
      .done(function(ret){
        if(ret.status === 0){
          Toast('add success');
        }else{
          self.$note.remove();
          // // remove()从DOM中删除所有匹配的元素。 https://jquery.cuishifeng.cn/remove.html
          Event.fire('waterfall')//add失败为什么要触发瀑布流？？成功都不需要触发，这里我觉得也不需要触发，因为没有新增东西。
          // index.js里面通过Event.on在绑定了waterfall事件
          Toast(ret.errorMsg);
        }
      });
    //todo
  },
```
* 那么当你点击增加后，在触发blur或者paste事件后，会触发`self.add()`函数
```js
on('blur paste', function() {//当失去焦点(也就是输入完成后离开输入框)或者粘贴的是时候触发
      // console.log('失去焦点或者粘贴')
      if( $noteCt.data('before') != $noteCt.html() ) {//如果before这个临时key里面的值不等于$noteCt.html()那就按照下面的代码把这个before临时key设置为$noteCt.html()
        $noteCt.data('before',$noteCt.html());//把临时before这个key设置为$noteCt.html()
        self.setLayout();//触发瀑布流事件效果
        if(self.id){//如果存在id就是执行编辑事件
          self.edit($noteCt.html())
        }else{//不存在id就执行增加事件
          self.add($noteCt.html())
        }
```
* 然后打开浏览器控制台点击路径add，在可以看到Headers里面最下面的Form Data里面有一个前端发送的参数`note:1`
* 后端通过该路径的`req.body`下面的代码就获取到这个参数
  * 对于post请求是[req.body](http://expressjs.com/en/5x/api.html#req.body),如果是get请求就是[req.query](http://expressjs.com/en/5x/api.html#req.query)
* 代码为
```js
router.post('/notes/add', function(req, res, next) {
  // 对于post请求是req.body,如果是get请求就是req.query
  // http://expressjs.com/en/5x/api.html#req.body
  // http://expressjs.com/en/5x/api.html#req.query
  var note=req.body.note
  console.log('add','note',note)
});
```
* 然后**你可以输入abc123**，然后出发blur事件，就可以在浏览器控制台的add路径里面的Headers的Form Data里面看到`note:abc123`,这是**前端部分**发送的参数，**后端**就看node.js里面的可以看到
```js
add note abc123
```
* 得到前端传的参数后，那么后端就需要去**数据库**里面创建一条信息保存它了。
### 数据库的使用，以sequelize为例
* 首先我们可以在w3c上面简单的了解一下[SQL 数据库教程](https://www.w3school.com.cn/sql/index.asp)，SQL 是用于访问和处理数据库的标准的计算机语言。通俗的解释数据库就是创建一个表。创建条目，增删改查不同条目。
* 当然我们这里也可以不用深入去了解数据库，可以使用js的一个npm包。常见的比如[mysql](https://www.npmjs.com/package/mysql)，通过它可以去调用数据库的一些语法。
* 但是这个我们暂时也不用，我们使用**[sequelize](https://www.npmjs.com/package/sequelize)**,[sequelize它的官网](https://sequelize.org/master/),[sequelize中文教程1](https://itbilu.com/nodejs/npm/V1PExztfb.html),[sequelize中文教程2](https://segmentfault.com/a/1190000011583660),他是一个[ORM-对象关系映射，类似于模型化封装](https://baike.baidu.com/item/ORM%E6%A1%86%E6%9E%B6/15541111?fr=aladdin),它可以对应不同的数据库使用，比如MySQL, MariaDB, SQLite and Microsoft SQL Server，说明底层是由一些数据库，但是我们不用去管底层的数据库，通过sequelize工具可以把所有的底层都覆盖了，通过使用相同的接口就可以去操作各种数据库。而且接口封装的还不错
* 使用sequelize会在本地生成一个文件，数据库就在这个文件里面。比如在目录database里面会有一个文件叫做database.sqlite，可以通过[sqlitestudio](http://www.downza.cn/soft/208363.html)查看具体数据内容
* 通过[入门](https://sequelize.org/master/manual/getting-started.html)我们可以知道如何安装和连接到数据库，并可以测试连接数据库是否成功，断开数据库连接的操作。
* 通过[模型基础](https://sequelize.org/master/manual/model-basics.html)我们按照下面代码可以定义一个表
```js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

//创建一个对应数据库里面有一个User这个表，这里面有两项，一个是firstName,类型是DataTypes.STRING字符串，一个是lastName，也是DataTypes.STRING字符串.
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```
* 创建整个表模型方法
  * User.sync() -如果不存在则创建表（如果已经存在则不执行任何操作）
  * User.sync({ force: true }) -这将创建表，如果该表已经存在，则将其首先删除
  * User.sync({ alter: true }) -这将检查数据库中表的当前状态（它具有哪些列，它们的数据类型等），然后在表中进行必要的更改以使其与模型匹配。
  * 比如
    ```js
      await User.sync({ force: true });
      console.log("The table for the User model was just (re)created!");//也就是强制删除原来的表，重新创建一个新表
    ```
* 删除整个表可以用drop，比如
```js
User.drop();
console.log("User table dropped!");
```
* 创建表中的条目，Sequelize提供了[create](https://sequelize.org/master/manual/model-instances.html)将上面显示的build和save方法组合为一个方法的方法
```js
const jane = await User.create({ name: "Jane" });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"
```
* 删除表的某个条目用destroy
```js
const jane = await User.create({ name: "Jane" });
console.log(jane.name); // "Jane"
await jane.destroy();
// Now this entry was removed from the database
```
### 开始使用sequelize
* sequelize跟mysql区别不大，不过mysql还需要配置用户名和密码。
* 首先根据[官网安装说明](https://sequelize.org/master/manual/getting-started.html#installing)，选择安装sequelize
* 今天发现有**三个官网**
  1. [sequelize_v5](https://sequelize.org/v5/)
  2. [sequelize_v3](https://sequelize.org/v3/)
  2. [sequelize_master](https://sequelize.org/master/)
* [Sequelize的一些小技巧](http://toobug.s.f2er.info/article/amp/sequelize-tricks.html)
```sh
npm install --save sequelize
```
* 我成功的版本是
```sh
+ sequelize@6.3.3
added 16 packages from 78 contributors in 4.745s
```
* 还要安装sqlite3
```sh
npm install --save sqlite3
```
* 我安装成功的版本如下
```sh
+ sqlite3@5.0.0
added 19 packages from 72 contributors, removed 65 packages, updated 4 packages and moved1 package in 7.926s
```
#### 首先创建数据库
* 创建数据库也就是和数据库进行一个连接，创建一个文件夹model里面文件是note.js
```js
const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
  dialect: 'sqlite',//选用的数据库方言
  storage: '../database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
});

//Sequelize构造函数除了可以接受host,dialect,storage，还可以接受很多选项。它们在API参考中记录。
//https://sequelize.org/master/manual/getting-started.html#installing
//https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
```
* [Sequelize构造函数](https://sequelize.org/master/manual/getting-started.html#installing)除了可以接受host,dialect,storage，还可以接受很多选项。它们在[API参考中记录](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor)。

#### 测试数据库连接成功
* 做好之后就可以**测试连接情况了**,使用该[.authenticate()](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-authenticate)功能测试连接是否正常：
```js
sequelize.authenticate()
    .then(function(){
        console.log('Connection has been established successfully.');
    })
    .catch(function(err){
        console.error('Unable to connect to the database:', error);
    })
```
* 当然上面的代码可以变化为try await catch,[官网的例子](https://sequelize.org/master/manual/getting-started.html)没有写[async关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function),并且还需要把这个函数执行或者立即执行都可以。
```js
// 上面的代码可以变化为try await catch
!async function f2(){
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}()
```
* 测试结果显示成功
```sh
$ node ./model/note.js
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```
* 如果用try语句没有async函数会报错如下
```sh
$ node ./model/note.js
D:\jirengu\github收集\Node-Express-online-memo\model\note.js:28
    await sequelize.authenticate();
    ^^^^^

SyntaxError: await is only valid in async function
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:656:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
```
* **这里连接成功后按照老师的显示应该会在目录database里面生成一个database.sqlite文件，但是我这里没有生成很奇怪**
#### 最新版本目录写错了,导致虽然连接成功但是不能生成数据文件
* 最新版本可能已经不能按照前面老师的目录索引写路径了
```js
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
  dialect: 'sqlite',//选用的数据库方言
  storage: '../database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
});
// 上面的目录写错了，应该按照下面的目录，默认是在最外面的目录，并且这里最前面不能用斜杆，比如'/database/database.sqlite'也是不会成功的
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
    dialect: 'sqlite',//选用的数据库方言
    storage: 'database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
});
```
#### 测试Sequelize.STRING和DataTypes.STRING
* 经过测试[DataTypes](https://sequelize.org/master/variable/index.html#static-variable-DataTypes)
```js
Note.sync({ force: true }).then(function (){
    Note.create({ text: "Jane" });
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    Note.findAll().then(function (notes) {
        // console.log(notes)
        console.log(Sequelize.STRING,'Sequelize.STRING')
        console.log(DataTypes.STRING,'DataTypes.STRING')
        // console.log(DataTypes,'DataTypes')
        // console.log(Sequelize,'Sequelize')
    });
})
```
* 显示的内容如下，都是一样的
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3);
{ [Function: STRING]
  types:
   { postgres: [ 'varchar' ],
     mysql: [ 'VAR_STRING' ],
     mariadb: [ 'VAR_STRING' ],
     sqlite: [ 'VARCHAR', 'VARCHAR BINARY' ],
     mssql: [ 231, 173 ] },
  key: 'STRING' } 'Sequelize.STRING'
{ [Function: STRING]
  types:
   { postgres: [ 'varchar' ],
     mysql: [ 'VAR_STRING' ],
     mariadb: [ 'VAR_STRING' ],
     sqlite: [ 'VARCHAR', 'VARCHAR BINARY' ],
     mssql: [ 231, 173 ] },
  key: 'STRING' } 'DataTypes.STRING'
```
* 经过把DataTypes和Sequelize打印出来，我们可以知道，DataTypes在Sequelize的原型链的一个环节上面，所以就类似于Object和Array一样，Array有Object的属性。
```js
Note.sync({ force: true }).then(function (){
    Note.create({ text: "Jane" });
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    Note.findAll().then(function (notes) {
        // console.log(notes)
        // console.log(Sequelize.STRING,'Sequelize.STRING')
        // console.log(DataTypes.STRING,'DataTypes.STRING')
        console.log(DataTypes,'DataTypes')
        console.log(Sequelize,'Sequelize')
    });
})
```
### 测试增删改查
#### 创建和查找数据
* 首先是创建，用到[API——create](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create),例子说明请看[官网模型实例这里](https://sequelize.org/master/manual/model-instances.html)
* 然后查找，用到[API——findAll](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll)，例子说明请看[官网模型查找基础](https://sequelize.org/master/manual/model-querying-basics.html)
* 注意这里需要异步去执行
```js
// User.sync() -如果不存在则创建表（如果已经存在则不执行任何操作）
// User.sync({ force: true }) -这将创建表，如果该表已经存在，则将其首先删除
// User.sync({ alter: true }) -这将检查数据库中表的当前状态（它具有哪些列，它们的数据类型等），然后在表中进行必要的更改以使其与模型匹配。

// 注意这里需要异步去执行
Note.sync({ force: true }).then(function (){//异步创建这个数据表
    Note.create({ text: "Jane" });//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll({raw:true}).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
        // console.log(Sequelize.STRING,'Sequelize.STRING')
        // console.log(DataTypes.STRING,'DataTypes.STRING')
        // console.log(DataTypes,'DataTypes')
        // console.log(Sequelize,'Sequelize')
    });
})
```
##### 使用raw:true
* 默认情况下，所有finder方法的结果都是模型类的实例（而不只是纯JavaScript对象）。这意味着在数据库返回结果之后，Sequelize会自动将所有内容包装在适当的实例对象中。在少数情况下，当结果太多时，这种包装可能会效率低下。要禁用此包装并收到简单的响应，[{ raw: true }请将其作为选项传递给finder方法。](https://sequelize.org/master/manual/model-querying-finders.html)
* 如果我不使用`raw:true`，
```js
Note.sync({ force: true }).then(function (){//异步创建这个数据表
    Note.create({ text: "Jane" });//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll().then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
        // console.log(Sequelize.STRING,'Sequelize.STRING')
        // console.log(DataTypes.STRING,'DataTypes.STRING')
        // console.log(DataTypes,'DataTypes')
        // console.log(Sequelize,'Sequelize')
    });
})
```
* 结果为
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3);
[ note {
    dataValues:
     { id: 1,
       text: 'Jane',
       createdAt: 2020-07-19T12:10:28.742Z,
       updatedAt: 2020-07-19T12:10:28.742Z },
    _previousDataValues:
     { id: 1,
       text: 'Jane',
       createdAt: 2020-07-19T12:10:28.742Z,
       updatedAt: 2020-07-19T12:10:28.742Z },
    _changed: Set {},
    _options:
     { isNewRecord: false,
       _schema: null,
       _schemaDelimiter: '',
       raw: true,
       attributes: [Array] },
    isNewRecord: false } ]
```
* 可以看到很多原始数据以外的其他内容，如果我们使用了`raw:true`，
```js
Note.sync({ force: true }).then(function (){//异步创建这个数据表
    Note.create({ text: "Jane1" });//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll({raw:true}).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
        // console.log(Sequelize.STRING,'Sequelize.STRING')
        // console.log(DataTypes.STRING,'DataTypes.STRING')
        // console.log(DataTypes,'DataTypes')
        // console.log(Sequelize,'Sequelize')
    });
})
```
* 显示的结果为,可以看到只有最原始的数据，没有其他信息。
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3);
[ { id: 1,
    text: 'Jane',
    createdAt: '2020-07-19 12:12:38.424 +00:00',
    updatedAt: '2020-07-19 12:12:38.424 +00:00' } ]
```
##### 查找某一项数据
* 根据[官网模型查询基础](https://sequelize.org/master/manual/model-querying-basics.html)来测试
*  数据表里面的本身的数据是
```js
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' },
  { id: 2,
    text: 'Jane',
    createdAt: '2020-07-20 04:39:41.261 +00:00',
    updatedAt: '2020-07-20 04:39:41.261 +00:00' } ]
```
* 使用以下attributes选项，可以查询所有的对应的属性
  * 比如查询所有的text属性
    ```js
      Note.findAll({raw:true,attributes: ['text']})
      .then(function(notes){
          console.log(notes)
      })
    ```
  * 显示的结果
    ```js
        $ node ./model/note.js
        Executing (default): SELECT `text` FROM `notes` AS `note`;
        [ { text: 'bomber' }, { text: 'Jane' } ]
    ```
  * 比如查询所有的text并且id属性
      ```js
          Note.findAll({raw:true,attributes: ['text','id']})
          .then(function(notes){
              console.log(notes)
          })
      ```
  * 显示的结果
    ```js
        $ node ./model/note.js
        Executing (default): SELECT `text`, `id` FROM `notes` AS `note`;
        [ { text: 'bomber', id: 1 }, { text: 'Jane', id: 2 } ]
    ```
* 可以使用嵌套数组来重命名属性：比如把`id`修改为`'id重命名为编号`
  ```js
    Note.findAll({raw:true,attributes: ['text', ['id', 'id重命名为编号']]})
    .then(function(notes){
        console.log(notes)
    })
  ```
* 结果为
  ```js
    $ node ./model/note.js
    Executing (default): SELECT `text`, `id` AS `id重命名为编号` FROM `notes` AS `note`;
    [ { text: 'bomber', 'id重命名为编号': 1 },
      { text: 'Jane', 'id重命名为编号': 2 } ]
  ```
* 您可以[sequelize.fn](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#static-method-fn)用来进行聚合。,fn函数里面的第一个参数[最常用](https://itbilu.com/nodejs/npm/V1PExztfb.html)的就是`count,sum,max,min`，[其他的参数可以参考模型的静态方法(Static Method Summary)里面](https://sequelize.org/master/class/lib/model.js~Model.html),使用聚合函数时，必须给它一个别名，以便能够从模型中访问它。在下面的示例中，您可以使用`n_id`来获得id的数量
  * 举例count——统计数据库中的元素数
    ```js
      Note.findAll({
          raw:true,
          attributes: ['text', [sequelize.fn('count', sequelize.col('id')), 'n_id']]})
      .then(function(notes){
          console.log(notes)
      })
    ```
  * 结果可以看到有2个
    ```js
      $ node ./model/note.js
      Executing (default): SELECT `text`, count(`id`) AS `n_id` FROM `notes` AS `note`;
      [ { text: 'bomber', n_id: 2 } ]
    ```
  * 举例max——查找指定表中最大值
    ```js
      Note.findAll({
          raw:true,
          attributes: ['text', [sequelize.fn('max', sequelize.col('id')), 'max_id']]})
      .then(function(notes){
          console.log(notes)
      })
    ```
  * 结果为
    ```js
      $ node ./model/note.js
      Executing (default): SELECT `text`, max(`id`) AS `max_id` FROM `notes` AS `note`;
      [ { text: 'Jane', max_id: 2 } ]
    ```
  * 举例min - 查找指定表中最小值
    ```js
      Note.findAll({
          raw:true,
          attributes: ['text', [sequelize.fn('min', sequelize.col('id')), 'min_id']]})
      .then(function(notes){
          console.log(notes)
      })
    ```
  * 结果为
    ```js
      $ node ./model/note.js
      Executing (default): SELECT `text`, min(`id`) AS `min_id` FROM `notes` AS `note`;
      [ { text: 'bomber', min_id: 1 } ]
    ```
  * 举例sum - 对指定属性求和
    ```js
      Note.findAll({
          raw:true,
          attributes: ['text', [sequelize.fn('sum', sequelize.col('id')), 'sum_id']]})
      .then(function(notes){
          console.log(notes)
      })
    ```
  * 结果为
    ```js
      $ node ./model/note.js
      Executing (default): SELECT `text`, sum(`id`) AS `sum_id` FROM `notes` AS `note`;
      [ { text: 'bomber', sum_id: 3 } ]
    ```
* 查找使用聚合值并把它加到原始数据中作为属性,用到include,但是这里显示的是**第一个,这里的第一个是 text: 'bomber'**
```js
Note.findAll({
    raw:true,
    attributes: {
        include:[
            [sequelize.fn('sum', sequelize.col('id')), 'sum_id']
        ]
    }
})
.then(function(notes){
    console.log(notes)
})
```
* 结果为
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt`, sum(`id`) AS `sum_id` FROM `notes` AS `note
`;
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00',
    sum_id: 3 } ]

```
* 同样，也可以删除一些选定的属性：用到exclude
```js
Note.findAll({
    raw:true,
    attributes: {
        exclude: ['text']
    }
})
.then(function(notes){
    console.log(notes)
})
```
* 查询的结果里面就不包含text属性。结果为
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
[ { id: 1,
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' },
  { id: 2,
    createdAt: '2020-07-20 04:39:41.261 +00:00',
    updatedAt: '2020-07-20 04:39:41.261 +00:00' } ]

```
##### 应用WHERE子句
* 该where选项用于过滤查询。where子句有很多运算符，可从以Symbols形式从[Op](https://sequelize.org/master/variable/index.html#static-variable-Op)使用。
* 选取属性为text，属性对应的值为`bomber`的信息
```js
Note.findAll({
    raw:true,
    where: {
        text: 'bomber'
      }
})
.then(function(notes){
    console.log(notes)
})
```
* 结果为
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE `note`.`text` =
 'bomber';
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' } ]
```
* 当没有[Op]((https://sequelize.org/master/variable/index.html#static-variable-Op))显示的传入的时候，因此默认情况下Sequelize假定进行相等比较。上面的代码等效于：
```js
const { Sequelize,DataTypes,Op } = require('sequelize');
//注意要把Op通过require传过来
Note.findAll({
    raw:true,
    where: {
        text: {[Op.eq]: 'bomber'}
      }
})
.then(function(notes){
    console.log(notes)
})
```
* 结果一样
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE `note`.`text` =
 'bomber';
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' } ]
```
* 多项目一起查询
```js
Note.findAll({
    raw:true,
    where: {
        text: 'bomber',
        id:'1'
      }
})
.then(function(notes){
    console.log(notes)
})
```
* 就可以查询到text为bomber，并且id为1对应的数据
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE `note`.`text` =
 'bomber' AND `note`.`id` = '1';
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' } ]
```
* 我们可以把多项目一起查询使用[Op](https://sequelize.org/master/variable/index.html#static-variable-Op)的and这个字段
```js
Note.findAll({
    raw: true,
    where: {
        [Op.and]: [
            { text: 'bomber'},
            { id: '1' }
        ]
    }
})
    .then(function (notes) {
        console.log(notes)
    })
```
* 结果一样
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE (`note`.`text`
= 'bomber' AND `note`.`id` = '1');
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' } ]
```
* 那or字段也很好理解了,就是或的关系
```js
Note.findAll({
    raw: true,
    where: {
        [Op.or]: [
            { id: '1'},
            { id: '2' }
        ]
    }
})
    .then(function (notes) {
        console.log(notes)
    })
```
* 结果为
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE (`note`.`id` =
'1' OR `note`.`id` = '2');
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' },
  { id: 2,
    text: 'Jane',
    createdAt: '2020-07-20 04:39:41.261 +00:00',
    updatedAt: '2020-07-20 04:39:41.261 +00:00' } ]
```
* 由于上述内容or涉及同一领域，因此Sequelize允许您使用略有不同的结构，该结构更易读并产生相同的行为：
```js
Note.findAll({
    raw: true,
    where: {
        id:{
            [Op.or]: [
                '1',
                '2'
            ]
        }
    }
})
    .then(function (notes) {
        console.log(notes)
    })
```
* 结果一样
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE (`note`.`id` =
'1' OR `note`.`id` = '2');
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' },
  { id: 2,
    text: 'Jane',
    createdAt: '2020-07-20 04:39:41.261 +00:00',
    updatedAt: '2020-07-20 04:39:41.261 +00:00' } ]
```
* [Sequelize提供了多个运算符](https://sequelize.org/master/manual/model-querying-basics.html)
* Op.in的简写语法
```js
Note.findAll({
    raw: true,
    where: {
        id:{
            [Op.in]: [
                '1',
                '2'
            ]
            // 可以简写为id: [1,2] 
        }
    }
})
    .then(function (notes) {
        console.log(notes)
    })
```
* 结果为
```js
$ node ./model/note.js
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` WHERE `note`.`id` IN
('1', '2');
[ { id: 1,
    text: 'bomber',
    createdAt: '2020-07-20 04:39:10.044 +00:00',
    updatedAt: '2020-07-20 04:39:10.044 +00:00' },
  { id: 2,
    text: 'Jane',
    createdAt: '2020-07-20 04:39:41.261 +00:00',
    updatedAt: '2020-07-20 04:39:41.261 +00:00' } ]
```
* [or与in的区别](https://blog.csdn.net/u011944141/article/details/77968482)
* [运算符Op.and，Op.or并且Op.not可以用于创建任意复杂的嵌套逻辑比较](https://sequelize.org/master/manual/model-querying-basics.html)
* 更多内容请查询[高级的查询使用函数，不推荐的操作符别名，简单的update查询，delete查询，批量创建](https://sequelize.org/master/manual/model-querying-basics.html)
* bulkCreate()接受一个fields选项，该数组定义必须考虑的字段（**其余字段将被忽略**）。
```js
const { Sequelize, DataTypes, Op } = require('sequelize');
// var Sequelize=require('sequelize')
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
    dialect: 'sqlite',//选用的数据库方言
    storage: 'database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
});


// id:1  text:hello ,createdAt:'创建事件' updatedAt：'更新时间'
const Note = sequelize.define('note', {//定义一个名字叫做note的表结构
    // Model attributes are defined here
    text: {//note的内容
        type: Sequelize.STRING,
        allowNull: false
    },
    admin:{
        type: Sequelize.STRING,
        allowNull: true
    }
});


// 注意这里需要异步去执行
Note.sync({ force: true }).then(function (){//异步创建这个数据表
    Note.bulkCreate([
        { text: "Jane" ,admin:'111'},
        { text:'bomber',admin:'aa'}
    ],{ fields: ['text'] });//，这里用了fields，那么就会导致amin的值是null
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll({raw:true}).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 结果为
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `admin` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`text`,`createdAt`,`updatedAt`) VALUES ('Jane','2020-07-20 14:43:48.1
59 +00:00','2020-07-20 14:43:48.159 +00:00'),('bomber','2020-07-20 14:43:48.159 +00:00','2020-07-20 14:43:48.15
9 +00:00');
Executing (default): SELECT `id`, `text`, `admin`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
[ { id: 1,
    text: 'Jane',
    admin: null,
    createdAt: '2020-07-20 14:43:48.159 +00:00',
    updatedAt: '2020-07-20 14:43:48.159 +00:00' },
  { id: 2,
    text: 'bomber',
    admin: null,
    createdAt: '2020-07-20 14:43:48.159 +00:00',
    updatedAt: '2020-07-20 14:43:48.159 +00:00' } ]

```
* 如果前面的代码没有加fields
```js
Note.sync({ force: true }).then(function (){//异步创建这个数据表
    Note.bulkCreate([
        { text: "Jane" ,admin:'111'},
        { text:'bomber',admin:'aa'}
    ]);//，这里用了fields，那么就会导致amin的值是null,没有用就会正常保存
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll({raw:true}).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 那么结果就会有admin保存
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `admin` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`text`,`admin`,`createdAt`,`updatedAt`) VALUES (NULL,'Jane','111
','2020-07-20 14:43:19.787 +00:00','2020-07-20 14:43:19.787 +00:00'),(NULL,'bomber','aa','2020-07-20 14:43:19.7
87 +00:00','2020-07-20 14:43:19.787 +00:00');
Executing (default): SELECT `id`, `text`, `admin`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
[ { id: 1,
    text: 'Jane',
    admin: '111',
    createdAt: '2020-07-20 14:43:19.787 +00:00',
    updatedAt: '2020-07-20 14:43:19.787 +00:00' },
  { id: 2,
    text: 'bomber',
    admin: 'aa',
    createdAt: '2020-07-20 14:43:19.787 +00:00',
    updatedAt: '2020-07-20 14:43:19.787 +00:00' } ]
```
##### omitNull和allowNull
###### omitNull
* [omitNull——sequelize](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html)和[omitNull——model](https://sequelize.org/master/class/lib/model.js~Model.html)跟allowNull很像，官方解释的意思是一个标志，用于定义是否将空值作为值传递给CREATE / UPDATE SQL查询。（**经过测试它的意思是能否查询到值为null**）
* 比如我设置的`omitNull:true`,就代表忽略null。**但是我测试之后，发现这个omitNull并没有用，不管设置true还是false都不会忽略null**
* 不过有写我查询得到的问题，但是我测试的好像都不太对，先留着吧
  * [使用omitNull选项时如何将属性设置为null](https://groups.google.com/forum/#!topic/sequelize/1H4jniJkBAw)
  * [how does omitNull work in sequelize](https://stackoverflow.com/questions/40082179/how-does-omitnull-work-in-sequelize)
  * [omitNull not working on primaryKey column in Sequelize](https://stackoverflow.com/questions/52184418/omitnull-not-working-on-primarykey-column-in-sequelize)
  * [Is there any way to omit null values? #11013](https://github.com/sequelize/sequelize/issues/11013)
  * [Sequelize 中文API文档－1. 快速入门、Sequelize类-搜索omitNull](https://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-instance-define)
###### allowNull
* 如果设置`allowNull为false`，**那么创建text为null的时候不会保存也不会显示出来**
```js
const Note = sequelize.define('note', {//定义一个名字叫做note的表结构
    // Model attributes are defined here
    text: {//note的内容
        type: Sequelize.STRING,
        allowNull:false,//如果设置为false不允许出现null，出现null的都不显示出来，也就是查询不到
    },
});
// 注意这里需要异步去执行
Note.sync({ force:true}).then(function (){//异步创建这个数据表
    Note.create({text:null}
        );
    console.log("The table for the User model was just (re)created!");
}).then(function(){
    Note.findAll({raw:true}).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 结果为空,并且报错说不能为null，不然不符合规则（也就是前面设置的`allowNull为false`）
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
(node:1584) UnhandledPromiseRejectionWarning: SequelizeValidationError: notNull Violation: note.text cannot be
null
    at InstanceValidator._validate (D:\jirengu\github收集\Node-Express-online-memo\node_modules\sequelize\lib\i
nstance-validator.js:78:13)
(node:1584) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by thro
wing inside of an async function without a catch block, or by rejecting a promise which was not handled with .c
atch(). (rejection id: 1)
(node:1584) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise r
ejections that are not handled will terminate the Node.js process with a non-zero exit code.
[]
```
* 如果设置`allowNull为true`，**那么创建text为null的时候就会保存也会显示出来**
```js
const Note = sequelize.define('note', {//定义一个名字叫做note的表结构
    // Model attributes are defined here
    text: {//note的内容
        type: Sequelize.STRING,
        allowNull:true,//如果设置为true允许出现null
    },
});
```
* 其他的代码不变，继续测试得到结果不报错，并且有一个包括了text为null的对象。
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3);
[ { id: 1,
    text: null,
    createdAt: '2020-07-21 14:08:43.031 +00:00',
    updatedAt: '2020-07-21 14:08:43.031 +00:00' } ]
```
***
* 注意这里如果第一次出现设置`allowNull为true`也报错的时候，需要`Note.sync({ force:true})`强制清除数据库重置数据库。**我刚开始没有发现这个方法弄了很久才弄清楚**
* 我是看到这个问题[Unhandled rejection SequelizeUniqueConstraintError: Validation error](https://stackoverflow.com/questions/40709409/unhandled-rejection-sequelizeuniqueconstrainterror-validation-error)最下面一个回答才了解到的
***
* 我查询到关于allowNull的使用
  * [如何.update()在sequelize中的值为NULL](https://oomake.com/question/13572159)
  * [官网也在验证和约束这节对allowNull进行了一些说明](https://sequelize.org/master/manual/validations-and-constraints.html)
##### 查询排序
* 首先我们用之前学习的批量创建数据[bulkCreate](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-bulkCreate)，然后分别测试查询排序的顺序(分别是ASC, DESC, NULLS FIRST, NULLS LAST)，这里小写也可以。
  * ASC——表示按ID列顺序排 
  * DESC——表示按ID列倒序排
  * NULLS FIRST——表示null排在有值行的前面  
  * NULLS LAST——表示null排在有值行的后面
  * 详细的说明可以查看[这篇文章——数据库NULL值的默认排序行为与查询、索引定义规范 - nulls first\last, asc\desc](https://www.cnblogs.com/telwanggs/p/10762042.html)
  * 另一篇文章——[oracle 和 db2 排序 order by desc/asc nulls last/nulss first 的用法将空值放到最后最前](https://blog.csdn.net/jiujie395/article/details/8983140/)
  * [SQL里desc和asc是什么意思啊](https://zhidao.baidu.com/question/42956420.html)
* 测试参考[官网](https://sequelize.org/master/manual/model-querying-basics.html)和[中文网站](https://itbilu.com/nodejs/npm/VJIR1CjMb.html) 
* 首先测试ASC
```js
Note.sync({ force: true }).then(function () {//异步创建这个数据表
    Note.bulkCreate([
        { text: null },
        { text: 'bomber' },
        { text: 'jane' }
    ]);
    console.log("The table for the User model was just (re)created!");
}).then(function () {
    Note.findAll({
        raw: true,
        order: [
            ['text', 'ASC']
        ]
    }).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 结果为**ID列顺序排**
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,NULL,'2020-07-21 14
:44:33.331 +00:00','2020-07-21 14:44:33.331 +00:00'),(NULL,'bomber','2020-07-21 14:44:33.331 +00:00','2020-07-2
1 14:44:33.331 +00:00'),(NULL,'jane','2020-07-21 14:44:33.331 +00:00','2020-07-21 14:44:33.331 +00:00');
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` ORDER BY `note`.`text
` ASC;
[ { id: 1,
    text: null,
    createdAt: '2020-07-21 14:44:33.331 +00:00',
    updatedAt: '2020-07-21 14:44:33.331 +00:00' },
  { id: 2,
    text: 'bomber',
    createdAt: '2020-07-21 14:44:33.331 +00:00',
    updatedAt: '2020-07-21 14:44:33.331 +00:00' },
  { id: 3,
    text: 'jane',
    createdAt: '2020-07-21 14:44:33.331 +00:00',
    updatedAt: '2020-07-21 14:44:33.331 +00:00' } ]
```
* 修改为DESC排序
```js
        order: [
            ['text', 'DESC']
        ]
```
* 结果为**ID列倒序排**
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,NULL,'2020-07-21 14
:45:53.798 +00:00','2020-07-21 14:45:53.798 +00:00'),(NULL,'bomber','2020-07-21 14:45:53.798 +00:00','2020-07-2
1 14:45:53.798 +00:00'),(NULL,'jane','2020-07-21 14:45:53.798 +00:00','2020-07-21 14:45:53.798 +00:00');
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` ORDER BY `note`.`text
` DESC;
[ { id: 3,
    text: 'jane',
    createdAt: '2020-07-21 14:45:53.798 +00:00',
    updatedAt: '2020-07-21 14:45:53.798 +00:00' },
  { id: 2,
    text: 'bomber',
    createdAt: '2020-07-21 14:45:53.798 +00:00',
    updatedAt: '2020-07-21 14:45:53.798 +00:00' },
  { id: 1,
    text: null,
    createdAt: '2020-07-21 14:45:53.798 +00:00',
    updatedAt: '2020-07-21 14:45:53.798 +00:00' } ]

```
* 修改为NULLS FIRST排序
```js
        order: [
            ['text', 'NULLS FIRST']
        ]
```
* 结果为**null排在有值行的前面**  
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,NULL,'2020-07-21 14
:47:52.504 +00:00','2020-07-21 14:47:52.504 +00:00'),(NULL,'bomber','2020-07-21 14:47:52.504 +00:00','2020-07-2
1 14:47:52.504 +00:00'),(NULL,'jane','2020-07-21 14:47:52.504 +00:00','2020-07-21 14:47:52.504 +00:00');
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` ORDER BY `note`.`text
` NULLS FIRST;
[ { id: 1,
    text: null,
    createdAt: '2020-07-21 14:47:52.504 +00:00',
    updatedAt: '2020-07-21 14:47:52.504 +00:00' },
  { id: 2,
    text: 'bomber',
    createdAt: '2020-07-21 14:47:52.504 +00:00',
    updatedAt: '2020-07-21 14:47:52.504 +00:00' },
  { id: 3,
    text: 'jane',
    createdAt: '2020-07-21 14:47:52.504 +00:00',
    updatedAt: '2020-07-21 14:47:52.504 +00:00' } ]
```
* * 修改为 NULLS LAST排序
```js
        order: [
            ['text', 'NULLS LAST']
        ]
```
* 结果为**null排在有值行的后面**
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`text`,`createdAt`,`updatedAt`) VALUES (NULL,NULL,'2020-07-21 14
:49:19.811 +00:00','2020-07-21 14:49:19.811 +00:00'),(NULL,'bomber','2020-07-21 14:49:19.811 +00:00','2020-07-2
1 14:49:19.811 +00:00'),(NULL,'jane','2020-07-21 14:49:19.811 +00:00','2020-07-21 14:49:19.811 +00:00');
Executing (default): SELECT `id`, `text`, `createdAt`, `updatedAt` FROM `notes` AS `note` ORDER BY `note`.`text
` NULLS LAST;
[ { id: 2,
    text: 'bomber',
    createdAt: '2020-07-21 14:49:19.811 +00:00',
    updatedAt: '2020-07-21 14:49:19.811 +00:00' },
  { id: 3,
    text: 'jane',
    createdAt: '2020-07-21 14:49:19.811 +00:00',
    updatedAt: '2020-07-21 14:49:19.811 +00:00' },
  { id: 1,
    text: null,
    createdAt: '2020-07-21 14:49:19.811 +00:00',
    updatedAt: '2020-07-21 14:49:19.811 +00:00' } ]
```
##### group分组
* group分组与前面的order查询排序很相似，不过没有第二个参数（比如，没有ASC, DESC, NULLS FIRST, etc）
* 我创建一个包括text和name属性的数据，然后分别查询text和name
* 首先创建，然后按照name分组
```js
Note.sync({ force: true }).then(function () {//异步创建这个数据表
    Note.bulkCreate([//把text为null的更新为text为1
        { name: 'aaa'},
        { name: '你好'},
        { text: 'bomber' },
        { text: 'jane' },

    ]);//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function () {
    // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
    Note.findAll({
        raw: true,
        group:'name'
    }).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 结果显示,**第一个没有name或者name为null的会排序在第一位，然后再显示全部的name属性**。
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 10:54:23.939 +00:00','2020-07-22 10:54:23.939 +00:00',NULL),(NULL,'你好','2020-07-22 10:54:23.939 +00:00'
,'2020-07-22 10:54:23.939 +00:00',NULL),(NULL,NULL,'2020-07-22 10:54:23.939 +00:00','2020-07-22 10:54:23.939 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 10:54:23.939 +00:00','2020-07-22 10:54:23.939 +00:00','jane');
Executing (default): SELECT `id`, `text`, `name`, `createdAt`, `updatedAt` FROM `notes` AS `note` GROUP BY `nam
e`;
[ { id: 3,
    text: 'bomber',
    name: null,//因为第一个没有name的是id为3的对象，然后再去查找name对应的所有对象。
    createdAt: '2020-07-22 10:54:23.939 +00:00',
    updatedAt: '2020-07-22 10:54:23.939 +00:00' },
  { id: 1,
    text: null,
    name: 'aaa',
    createdAt: '2020-07-22 10:54:23.939 +00:00',
    updatedAt: '2020-07-22 10:54:23.939 +00:00' },
  { id: 2,
    text: null,
    name: '你好',
    createdAt: '2020-07-22 10:54:23.939 +00:00',
    updatedAt: '2020-07-22 10:54:23.939 +00:00' } ]
```
* 然后按照text分组
```js
    Note.findAll({
        raw: true,
        group:'text'
    })
```
* 结果为，第一个没有text的就是id为1,然后查找所有的text，也就是id3和4
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 10:55:55.253 +00:00','2020-07-22 10:55:55.253 +00:00',NULL),(NULL,'你好','2020-07-22 10:55:55.253 +00:00'
,'2020-07-22 10:55:55.253 +00:00',NULL),(NULL,NULL,'2020-07-22 10:55:55.253 +00:00','2020-07-22 10:55:55.253 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 10:55:55.253 +00:00','2020-07-22 10:55:55.253 +00:00','jane');
Executing (default): SELECT `id`, `text`, `name`, `createdAt`, `updatedAt` FROM `notes` AS `note` GROUP BY `tex
t`;
[ { id: 1,
    text: null,
    name: 'aaa',
    createdAt: '2020-07-22 10:55:55.253 +00:00',
    updatedAt: '2020-07-22 10:55:55.253 +00:00' },
  { id: 3,
    text: 'bomber',
    name: null,
    createdAt: '2020-07-22 10:55:55.253 +00:00',
    updatedAt: '2020-07-22 10:55:55.253 +00:00' },
  { id: 4,
    text: 'jane',
    name: null,
    createdAt: '2020-07-22 10:55:55.253 +00:00',
    updatedAt: '2020-07-22 10:55:55.253 +00:00' } ]
```
##### 限制limit和分页offset（分页就是跳过前面多少个）
* 比如我们同样创建并限制2个
```js
Note.sync({ force: true }).then(function () {//异步创建这个数据表
    Note.bulkCreate([//把text为null的更新为text为1
        { name: 'aaa'},
        { name: '你好'},
        { text: 'bomber' },
        { text: 'jane' },

    ]);//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function () {
    Note.findAll({
        raw: true,
        limit: 2
    }).then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
})
```
* 结果**创建的4个对象里面只会显示前面两个对象**
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:05:42.341 +00:00','2020-07-22 11:05:42.341 +00:00',NULL),(NULL,'你好','2020-07-22 11:05:42.341 +00:00'
,'2020-07-22 11:05:42.341 +00:00',NULL),(NULL,NULL,'2020-07-22 11:05:42.341 +00:00','2020-07-22 11:05:42.341 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:05:42.341 +00:00','2020-07-22 11:05:42.341 +00:00','jane');
Executing (default): SELECT `id`, `text`, `name`, `createdAt`, `updatedAt` FROM `notes` AS `note` LIMIT 2;
[ { id: 1,
    text: null,
    name: 'aaa',
    createdAt: '2020-07-22 11:05:42.341 +00:00',
    updatedAt: '2020-07-22 11:05:42.341 +00:00' },
  { id: 2,
    text: null,
    name: '你好',
    createdAt: '2020-07-22 11:05:42.341 +00:00',
    updatedAt: '2020-07-22 11:05:42.341 +00:00' } ]
```
* 设置offset为2，也就是跳过前面两个
```js
    Note.findAll({
        raw: true,
        offset: 2
    })
```
* 结果为，**跳过前面两个，只显示4个对象的最后两个对象**
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:07:52.003 +00:00','2020-07-22 11:07:52.003 +00:00',NULL),(NULL,'你好','2020-07-22 11:07:52.003 +00:00'
,'2020-07-22 11:07:52.003 +00:00',NULL),(NULL,NULL,'2020-07-22 11:07:52.003 +00:00','2020-07-22 11:07:52.003 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:07:52.003 +00:00','2020-07-22 11:07:52.003 +00:00','jane');
Executing (default): SELECT `id`, `text`, `name`, `createdAt`, `updatedAt` FROM `notes` AS `note` LIMIT 2, 1000
0000000000;
[ { id: 3,
    text: 'bomber',
    name: null,
    createdAt: '2020-07-22 11:07:52.003 +00:00',
    updatedAt: '2020-07-22 11:07:52.003 +00:00' },
  { id: 4,
    text: 'jane',
    name: null,
    createdAt: '2020-07-22 11:07:52.003 +00:00',
    updatedAt: '2020-07-22 11:07:52.003 +00:00' } ]
```
* 集合limit和offset。跳过2个，限制1个
```js
    Note.findAll({
        raw: true,
        offset: 2,
        limit:1
    })
```
* 那么4个对象前面两个跳过，限制一个，那么只会显示第三个对象
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:09:28.701 +00:00','2020-07-22 11:09:28.701 +00:00',NULL),(NULL,'你好','2020-07-22 11:09:28.701 +00:00'
,'2020-07-22 11:09:28.701 +00:00',NULL),(NULL,NULL,'2020-07-22 11:09:28.701 +00:00','2020-07-22 11:09:28.701 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:09:28.701 +00:00','2020-07-22 11:09:28.701 +00:00','jane');
Executing (default): SELECT `id`, `text`, `name`, `createdAt`, `updatedAt` FROM `notes` AS `note` LIMIT 2, 1;
[ { id: 3,
    text: 'bomber',
    name: null,
    createdAt: '2020-07-22 11:09:28.701 +00:00',
    updatedAt: '2020-07-22 11:09:28.701 +00:00' } ]
```
##### count次数
* 创建4个对象，然后找到id大于2的次数
```js
Note.sync({ force: true }).then(function () {//异步创建这个数据表
    Note.bulkCreate([//把text为null的更新为text为1
        { name: 'aaa'},
        { name: '你好'},
        { text: 'bomber' },
        { text: 'jane' },

    ]);
    console.log("The table for the User model was just (re)created!");
}).then(function () {
    Note.count({
        raw: true,
        where: {
            id: {
              [Op.gt]: 2//id大于2的
            }
          }
    }).then(function (notes) {//查找内容
        console.log(`id大于2出现次数为${notes}`)//查找到就去展示这个数据
    });
})
```
* 显示的结果为
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:17:52.581 +00:00','2020-07-22 11:17:52.581 +00:00',NULL),(NULL,'你好','2020-07-22 11:17:52.581 +00:00'
,'2020-07-22 11:17:52.581 +00:00',NULL),(NULL,NULL,'2020-07-22 11:17:52.581 +00:00','2020-07-22 11:17:52.581 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:17:52.581 +00:00','2020-07-22 11:17:52.581 +00:00','jane');
Executing (default): SELECT count(*) AS `count` FROM `notes` AS `note` WHERE `note`.`id` > 2;
id大于2出现次数为2
```
##### max最大, min最小, sum求和
* 最大值max
```js
Note.sync({ force: true }).then(function () {//异步创建这个数据表
    Note.bulkCreate([//把text为null的更新为text为1
        { name: 'aaa'},
        { name: '你好'},
        { text: 'bomber' },
        { text: 'jane' },
    ]);//，然后往这个表里面增加内容
    console.log("The table for the User model was just (re)created!");
}).then(function () {
    Note.max('id')
    .then(function (notes) {//查找内容
        console.log(notes)//查找到就去展示这个数据
    });
    
})
```
* 结果为4
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT max(`id`) AS `max` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:24:36.935 +00:00','2020-07-22 11:24:36.935 +00:00',NULL),(NULL,'你好','2020-07-22 11:24:36.935 +00:00'
,'2020-07-22 11:24:36.935 +00:00',NULL),(NULL,NULL,'2020-07-22 11:24:36.935 +00:00','2020-07-22 11:24:36.935 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:24:36.935 +00:00','2020-07-22 11:24:36.935 +00:00','jane');
4
```
* 最小值min
```js
    Note.min('id')
```
* 结果为1
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT min(`id`) AS `min` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:27:39.090 +00:00','2020-07-22 11:27:39.090 +00:00',NULL),(NULL,'你好','2020-07-22 11:27:39.090 +00:00'
,'2020-07-22 11:27:39.090 +00:00',NULL),(NULL,NULL,'2020-07-22 11:27:39.090 +00:00','2020-07-22 11:27:39.090 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:27:39.090 +00:00','2020-07-22 11:27:39.090 +00:00','jane');
1
```
* 求和sum为1+2+3+4=10
```js
$ node ./model/note.js
Executing (default): DROP TABLE IF EXISTS `notes`;
Executing (default): CREATE TABLE IF NOT EXISTS `notes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` VARCHAR
(255), `name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`notes`)
The table for the User model was just (re)created!
Executing (default): SELECT sum(`id`) AS `sum` FROM `notes` AS `note`;
Executing (default): INSERT INTO `notes` (`id`,`name`,`createdAt`,`updatedAt`,`text`) VALUES (NULL,'aaa','2020-
07-22 11:28:06.031 +00:00','2020-07-22 11:28:06.031 +00:00',NULL),(NULL,'你好','2020-07-22 11:28:06.031 +00:00'
,'2020-07-22 11:28:06.031 +00:00',NULL),(NULL,NULL,'2020-07-22 11:28:06.031 +00:00','2020-07-22 11:28:06.031 +0
0:00','bomber'),(NULL,NULL,'2020-07-22 11:28:06.031 +00:00','2020-07-22 11:28:06.031 +00:00','jane');
10
```
## 继续完善代码（get请求,路径/api/notes）
* 为了安全考了我们把之前的model目录下的note.js的storagge的路径调整为用path
* 原来的代码
```js
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
    dialect: 'sqlite',//选用的数据库方言
    storage: 'database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
});
```
* 调整为
```js
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
    dialect: 'sqlite',//选用的数据库方言
    storage: path.join(__dirname,'../database/database.sqlite')//用了path.join和__dirname，当前文件目录，那么就需要用到两个点找到上一层目录对应的数据库的存放路径database目录的database.sqlite文件会自动创建
});
```
* 然后再note.js里面导出这个Note
```js
module.exports.Note=Note
```
* 然后再routes的api.js的里面使用这个导出的Note
```js
var Note=require('../model/note').Note

/* 
    1. 获取所有的note：GET方法。路径`/api/notes`.
        * 后台响应一般就是成功或者失败，然后传回对应的参数`res:{status:0，data:[{},{}]}`代表成功，如果是0以外的值，比如1，2，3等就是失败的。只不过失败的原因不同。另一个参数就是数据data，是一个数组，里面有不同的数据，每一个数据就是一个note。如果失败的了参数比如`{status:1,errorMsg:'失败的原因'}`
        * 所以如果status为0就可以把data获取到。如果status为1，就可以知道失败的原因(errorMsg)。
*/

/* 前端发的请求都会到这里对应的路由去执行响应的函数 */
/* 获取所有notes */
router.get('/notes', function(req, res, next) {
  Note.findAll({raw:true})
  .then(function(notes){
    console.log(notes)
    res.send({status:0,data:notes})//把后端响应的数据{status:0,data:notes}发送给前端
  })
  console.log('/notes');
});
```
* 那么前端每次进入页面主页的时候会通过`目录js/app/index.js`里面触发NoteManager的load函数`NoteManager.load();`，而这个函数会去发送路径`/api/notes`相对应的的请求,然后获取的数据在函数的参数里面，下面的代码也就是后端传的参数`{status:0,data:notes}`在ret里面,然后通过$.each去遍历这个对象里面的data，也就是ret.data。然后把获取到的数据区创建note.代码为
```js
  function load() {//页面刚进来需要向服务器发请求去得到所有数据，然后加载所有数据渲染让用户看到,在app.js里面有触发这个load函数
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
            console.log($.each)
          $.each(ret.data, function(idx, article) {
            //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
            // https://www.jquery123.com/jQuery.each/
            // 也就是遍历第一个参数ret.data
            console.log(idx,article)
              new Note({//后端获取到的数据去创建note
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });
  }
```
* 其中参数idx和article打出来的数据是
```js
0 {id: 1, text: "hello world", createdAt: "2020-07-22 15:55:08.314 +00:00", updatedAt: "2020-07-22 15:55:08.314 +00:00"}
index.js:612 1 {id: 2, text: "1hello world", createdAt: "2020-07-22 15:56:10.769 +00:00", updatedAt: "2020-07-22 15:56:10.769 +00:00"}
index.js:612 2 {id: 3, text: "1hello world", createdAt: "2020-07-22 15:56:13.984 +00:00", updatedAt: "2020-07-22 15:56:13.984 +00:00"}
index.js:612 3 {id: 4, text: "1hello world", createdAt: "2020-07-23 05:52:49.820 +00:00", updatedAt: "2020-07-23 05:52:49.820 +00:00"}
index.js:612 4 {id: 5, text: "1hello world", createdAt: "2020-07-23 06:02:41.027 +00:00", updatedAt: "2020-07-23 06:02:41.027 +00:00"}
```
### get方法请求路径'/api/notes'的数据并相应数据的代码小结
* 首先后端通过model里面的note.js的代码在**数据库里面存储了数据**。
* **前端**src目录的js的app的index.js通过`NoteManager.load();`触发load函数,这个函数里面通过`$.get('/api/notes')`,也就是`api/notes`这个路径发一个get请求。
* **后端**在routes目录的api.js里面针对路径`api/notes`给出了响应`router.get('/notes', function(req, res, next)`
* **前端**就可以通过下面代码拿到数据就可以创建一个note使用了。
```js
  function load() {//页面刚进来需要向服务器发请求去得到所有数据，然后加载所有数据渲染让用户看到,在app.js里面有触发这个load函数
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
            console.log($.each)
          $.each(ret.data, function(idx, article) {
            //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
            // https://www.jquery123.com/jQuery.each/
            // 也就是遍历第一个参数ret.data
            console.log(idx,article)
              new Note({//前端获取到后端的数据后去创建note
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });
  }
```
* 以上这就是一个**简单的前后端联调的过程**。
## 继续把add,delete,edit代码完善
* 因为每次进入页面都会发起`$.get('/api/notes')`请求，所以add，delete和edit的时候响应的信息不需要返回note了，只需要返回status即可。
* 这里可以通过**前端控制台看到对应的路径请求的Form Data有没有正确的数据，如果有正确的数据那就说明前端部分没有问题。**
* 后端最好在修改内容的时候之前**查询检查一下有没有这个note对应的id，如果都不存在那么直接返回数据库不存在该内容即可。**
* 代码为
```js
router.post('/notes/add', function(req, res, next) {
  // 对于post请求是req.body,如果是get请求就是req.query
  // http://expressjs.com/en/5x/api.html#req.body
  // http://expressjs.com/en/5x/api.html#req.query
  Note.create({text:req.body.note})//post请求的的数据是在req.body里面去获取
  .then(function(notes){
    res.send({status:0})//因为增加note的前端代码就实现了效果，后端只需要告诉前端增加成功即可。成功就是{status:0}
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
/* 修改note */
router.post('/notes/edit', function(req, res, next) {
  Note.update(//where里面是找到的对应的id，第一个参数{id:req.body.id,text:req.body.note}里面的id和text是修改后的值
    {text:req.body.note},//只需要修改对应id的text内容就可以了
    {
      where:{//找到数据库里面后端发给前端的id，并且前端又传过来的id.
        id:req.body.id
      }
  })
  .then(function(notes){
    res.send({status:0});
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
/* 删除note */
router.post('/notes/delete', function(req, res, next) {
  Note.destroy({//这里的删除destroy要找到哪一个id，要使用where语句
    where:{
      id:req.body.id
    }
  })
  .then(function(notes){
    res.send({status:0});
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
### note-manager.js引用奇怪的问题
* delete和edit需要知道删除哪一个，所以需要前端传入一个参数id，add和edit需要前端传入一个参数就是增加或者编辑的内容。
* note-manager.js是一个立即执行函数并且返回一个对象，但是导出是用
```js
module.exports.NoteManager = NoteManager
```
* 它在app目录的index.js里面引用没问题
```js
var NoteManager = require('mod/note-manager.js').NoteManager;
```
* 但是在note.js里面同样引入就找不到这个模块
* 比如要这样引入，也就是不要用到后的调用
```js
var NoteManager = require('mod/note-manager.js');
```
* 先记录一下，**不知道是不是因为index.js是入口文件所以可以这么引入，还是说NoteManager.js本身是一个立即执行函数，所以不能这么引入在非入口文件呢？**
* **经过测试，我把立即执行函数返回一个对象修改为一个普通函数还是不能在别的组件获取到，只能在入口index.js文件获取到**
### 在便签中输入空格会转义的bug修复
* 不知道是不是note.js文件里面的html()的原因，后续把它修改为text()在测试一下
* [Jquery中html()、text()、val()的使用和区别](https://www.cnblogs.com/dbj66/p/8465958.html)
* 经过测试，我把note.js里面的`$noteCt.html()`都修改为`$noteCt.text()`这样在保存后数据库里面就不会转码了
* `$noteCt.html()`的空格和大于小于号显示效果**会转码**
```
&nbsp; &nbsp;324234&nbsp; &nbsp;23423423&lt;&gt;&lt;&gt;&lt;&gt;&lt;
```
* `$noteCt.text()`的空格和大于小于号显示效果**不会转码**
```
safasd a da we<><><><>
```
### 不刷新触发add之后同样的便签修改不会触发edit
* 不刷新触发add之后同样的便签修改不会触发edit,还是会触发add，要刷新之后才会在后台保存并有id，这时候才会触发edit。这个bug我不知道怎么修改。我是考了使用一个刷新API，但是刷新后会导致add的toast弹出不能被看到。         
```js 
window.location.reload()//如果不刷新，那么同样的note上面修改会导致增加事件而不是编辑事件。
```
### update，create，destroy和findAll返回什么
* [update](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-update)，返回一个包含一个或两个元素的数组。第一个元素始终是受影响的行数，而第二个元素是实际受影响的行（仅在options.returningtrue的postgres中支持）。
* [create](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create)，返回的是model对象
* [destroy](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-destroy)，返回的是被删除的行数。
* [findAll](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll),返回的是model对象
## 下一步要实现登陆注册
* 涉及到session和cookie
* 登陆有两种：
  * 一种是自带的登陆注册，跳转到一个页面（加一个路由和一个模板就可以实现一个页面）去给用户输入信息（比如邮箱用户名和密码，等等），然后再数据库里面保存。当然密码不是存储明文的密码，而是加密后的密码。经过md5或者是sha1。[SHA 加密是什么（ sha1 和 MD5 的区别 ）](https://blog.csdn.net/ahaotata/article/details/84934903)。忘记数据库被盗取也看不到真实的密码是什么。当用户再次用用户名和面登陆的时候，需要一个后端的接口，就是在数据库里面去查询是否匹配，如果匹配就登陆成功，反之亦然。数据库里面拿密码也是经过一次加密（md5或者sha1）,不匹配可以提示用户名不存在或者密码错误等。如果连续输错五次可以给用户在几个小时之后才能输入（这个操作比较复杂，暂时没有实现），用户登录了就可以设置session，把用户逇信息放到req.session上面。当用户打开首页的时候对这个session是否存在进行判断，如果有那么session里面就有用户的信息，那么islogin就是true，然后后端可以把用户信息传回给前端，前端打开页面的时候就可以看到自己的头像了。如果没有登陆的那么看到的就是登陆的按钮。
  * 另一个是第三方的登陆没使用的是auth2的协议，协议内容比较负载，但是用法比较简单。甚至都可以不需要数据库这个表。可以参考[理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
* 目前我们的便利贴 任何人都可以去修改，创建和删除。这样不够合理，可以添加一些权限，比如管理员可以所有操作，而普通用户只能操作自己创建的便利贴。
* 我这里使用第三方登陆，也就是auth2这个协议。
* 点击github登陆会跳转到github的登陆页面，然后输入github的账号和密码登陆，然后调回到我们的便利贴网站显示登陆成功后的页面。实际上这就是auth2这个协议支撑的效果。前提是需要便利贴网站在github注册并获得一个key.github网站并不保存便利贴网站的数据。数据是不相通的，如果想通那么任何网站就可以互相获取账号和密码。
### 便利贴网站用github登陆的大致auth2流程
* 便利贴网站用github登陆的大致auth2流程
  * 点击便利贴网站的github登录首先是进入的当前网站（便利贴网站的后台告诉后台我要登录了），也就是便利贴网站的前端向后端发送一个请求
  * 便利贴网站的后台会向github服务的接口去请求，意思是有用户要登陆了，然后给一些便利贴网站的信息给github(因为便利贴网站在github注册后会有一个clientID和clientSecret参数，这个信息就是这些)，给这个用户返回一个页面（**这个页面是github本身的登陆页面，不是便利贴网站的登陆页面，这里的用户名和密码是github的，便利贴网站是看不到的**）
  * 如果github登陆验证成功就**调用回调callback的接口**，便利贴网站有一个可以接收回调接口的地址。给便利贴网站发送一些信息（这些信息包括登陆用户的相关信息），便利贴网站获取到这些相关信息后就认为该用户已经登陆了，然后便利贴网站的后台自己对应的做一些网页的操作。
* 这个流程的方便之处就是
  * 我们可以在github的后台设置很多引用。每一个引用都有一个单独的权限，**每一个应用都对应了一个key**，如果**其中一个clientID和clientSecret参数泄露了，但是不影响其他的clientID和clientSecret参数，因为每个应用的clientID和clientSecret参数都是不相同的**。
### 实现auth2协议的登陆
#### passport和express-session设置和代码
* 首先要安装[passport](https://www.npmjs.com/package/passport)和[passport-github](https://www.npmjs.com/package/passport-github)和[express-session](https://www.npmjs.com/package/express-session)
```
npm install passport passport-github express-session
```
* 然后创建auth路由和 auth.js文件
```js
var api = require('./routes/api');
...
app.use('/auth',auth)//所有的认证这个路由进入，不管是 github，微博，QQ等第三方登陆
```
* 使用passport和express-session的时候官网推荐我们要按照官网代码写,要在基于Express或 Connect的应用程序中使用Passport，请使用所需的passport.initialize()中间件对其进行配置。如果您的应用程序使用持久登录会话（推荐但不是必需的），则passport.session() 还必须使用中间件。
```js
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
...
// https://www.npmjs.com/package/express-session
app.use(session({secret: 'sessionsecret'}));
...
// https://www.npmjs.com/package/passport
app.use(passport.initialize());
app.use(passport.session());
```
* 然后还需要设置session.
  * Passport要保持sessions持久登陆，需要验证用户的序列化session和后续反序列化请求的设置。
  * passport.serializeUser是去生成一个session储存在内存里面，passport.deserializeUser是刷新后反序列化从内存中拿到这个session解析知道是某个用户。（**所以因为存储到内存里面，所以服务器重启那么这个session就消失了，就需要重新登陆，所有的登陆状态变成未登录状态，所以一般的大型网站的session是需要储存到数据库里面，这样服务器重启，那么cookie还在。对应的session就也存在。数据库一查询就认为是登陆状态。就不用影响用户登录，对于更大的利用到分布式服务器的时候，一个服务器不够没需要多个服务器。登陆后记录到某个服务器为登陆状态，下次用电脑是另外一个地方，连接的是另外一个服务器，那就可能没有登陆了，这里就要利用到数据库层面的共享**）
```js
passport.serializeUser(function(user, done) {//官网的序列化代码，意思就是用户登录的信息传递到passport之后，让它去生成一个session储存在内存里面。我们也可以设置存储到数据库里面
    // done(null, user.id);//以用户的id作为session的id并储存。
    console.log('---serializeUser---')
    console.log(user)
    done(null, user.id);
  });
...
passport.deserializeUser(function(id, done) {//官网的反序列化代码，用户刷新页面的时候，会从内存里面把对应的session拿出来解析后，就知道是某个用户。
    // User.findById(id, function (err, user) {//User是一个数据库，当用户刷新页面的时候去数据库里面通过id得到用户的信息，然后把它重新拿出来。
    //     console.log('---serializeUser---')
    //     console.log(user)
    //     done(null, user.id);
    // //   done(err, user);
    // });
    console.log('---deserializeUser---')//如果登陆后再次刷新页面还是可以得到这个id，这个是从服务端把session发送给用户，用户储存到cookie里面，并且浏览器以sessionId的形式存储到浏览器的cookie里面获取到的。再次请求的时候会带上这个存在cookie里面的sessionID，如果与服务器内存（也可以存到数据库里面）里面的cookie匹配那么就知道你是已经登陆的用户了，然后就可以展示该用户的相关信息，比如用户名及头像等
    console.log('id',id)
    done(null, id);
  });
```
#### passport-github设置和代码
* [第三方登陆auth(github)](https://blog.csdn.net/weixin_41545048/article/details/102978945)
* 设置了中间件后，使用passport-github设置应用程序，首选需要在github上创建账号，然后再Settings->Developer settings->OAuth Apps里面New OAuth APP创建一个新的应用
  * 注意：这里的Homepage URL是你的Homepage页面
Authorization callback URL是获得授权后的跳转页面
  * 我设置的Homepage URL
    ```js
      http://127.0.0.1:8080/
    ```
  * 设置的Authorization callback URL是
    ```js
      http://127.0.0.1:8080/auth/github/callback
    ```
  * 然后你还可以看到Client ID和Client Secret
* 根据[passport-github](https://www.npmjs.com/package/passport-github)官网需要在auth.js里面创建如下代码,首先是配置策略
```js
var GitHubStrategy = require('passport-github').Strategy;//在passport基础上进行封装，有具体的的URL和跳转，不同的应用里面的URL，写法和规则不同
// https://www.npmjs.com/package/passport-github

passport.use(new GitHubStrategy({
    clientID: '输入自己的clientID',
    clientSecret: '输入自己的clientSecret',
    callbackURL: "http://127.0.0.1:8080/auth/github/callback"//向github的登陆入口去发送请求，然后把前面的clientID和clientSecret传递过去，那么github就知道是哪个应用发的请求。github就会向请求方传送一个密钥，会调用这个callback回来
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    done(null, profile);
  }
));
```
* 然后设置验证请求和回调函数
```js
router.get('/github',
  passport.authenticate('github'));//这是登陆的入口，当点击auth/github的时候就会去调用passport.authenticate('github')，然后去认证这个github，这个过程是用户点击的

router.get('/github/callback',//当有回调函数回来之后，就会真正的得到这些用户信息，这个过程是github账号体系自己返回的的它发的这个请求。这个路由是回调地址，也就是便利贴网站需要接收的请求的地址。
  passport.authenticate('github', { failureRedirect: '/login' }),//失败的话会进入到登陆的路由
  function(req, res) {//成功会进入到这里，这是github服务器想便利贴后台发送的这些数据，存在req.user里面
    console.log('sucess....')
    console.log(req.user)
    req.session.user = {//成功后就给响应的session里面的user增加id,username,avatar,provider
      id: req.user.id,//这里的req.user的信息在前面的console.log(user)里面可以看到，用户id
      username: req.user.displayName || req.user.username,//用户名字
      avatar: req.user._json.avatar_url,//用户头像
      provider: req.user.provider//信息的提供方
    };
    res.redirect('/');
  });
```
* 上面的`req.session.user`中的`req.session`是来自于[express-session](https://www.npmjs.com/package/express-session)依赖。也就是要存储或访问session data，只需使用request属性req.session，该属性通常由储存的序列化为JSON，因此嵌套对象通常很好。
* 上面的`res.redirect`来自于express框架的[res.redirect](http://expressjs.com/en/5x/api.html#res.redirect)，也就是重定向路由。
* 根据[express-session](https://www.npmjs.com/package/express-session)依赖需要加入下面代码,首先创建中间件
```js
var session = require('express-session');
...
// https://www.npmjs.com/package/express-session
app.use(session({secret: 'sessionsecret'}));
```
#### node.js展示获取到的部分打印信息
* github会传递一些信息过来，我这里就展示一部分
```js
---serializeUser---
{ id: '44310426',
  displayName: 'bomber hong',
  username: 'bomber063',
  profileUrl: 'https://github.com/bomber063',
  photos:
   [ { value: 'https://avatars1.githubusercontent.com/u/44310426?v=4' } ],
  provider: 'github',
```
* 认证通过后会显示req.user的信息如下
```js
sucess....
{ id: '44310426',
  displayName: 'bomber hong',
  username: 'bomber063',
  profileUrl: 'https://github.com/bomber063',
  photos:
   [ { value: 'https://avatars1.githubusercontent.com/u/44310426?v=4' } ],
  provider: 'github',
```
* **最新的反序列化里面的不是对象obj，而是一个id，老师的老版本里面显示的是一个对象。**
```js
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
```
#### 设置模板和主页代码
* index.js主页代码修改为
```js
var express = require('express');//引入express，从node_modules里面
var router = express.Router();//用express的Router函数

/* GET home page. */
router.get('/', function(req, res, next) {//req是请求，res是响应，next是下一个执行的函

var data;//如果存在req.session.user就代表登陆，然后把数据放到data里面传给模板index.ejs
if(req.session.user){
  data = {
    isLogin: true,
    user: req.session.user
  }
}else{//不存在就说明未登录，不传用户参数
  data = {
    isLogin: false
  }
}

  res.render('index', data);
});

module.exports = router;
```
* 主页模板index.ejs修改为
```html
    <div id="header">
      <a class="add-note" title="添加笔记" href="#"><span class="fa fa-plus"></span> 添加</a>
      <ul class="user-area">
       <% if (isLogin){ %>
          <li><img src="<%= user.avatar %>" alt=""></li>
          <li><span title="<%= user.username %>"><%= user.username %></span></li>
          <li><span class="line"> | </span> </li>
          <li><a class="logout" href="/auth/logout">注销</a></li>
        <%} else { %>
          <li><a class="login" title="GitHub登录" href="/auth/github"> GitHub登录</a>
          </li>
        <% } %>
      </ul>
```
#### 设置注销路径
* 在auth.js里面设置注销路径，对应使用express-session依赖的[req.session.destroy](https://www.npmjs.com/package/express-session),销毁session并取消设置req.session属性
* 然后对应使用express框架的重定向[res.redirect](http://expressjs.com/en/5x/api.html#res.redirect),重定向可以是用于重定向到其他站点的标准URL
```js
router.get('/logout', function(req, res){
  req.session.destroy();
//   express-session依赖的[req.session.destroy](https://www.npmjs.com/package/express-session),销毁session并取消设置req.session属性
  res.redirect('/');
//   express框架的重定向[res.redirect](http://expressjs.com/en/5x/api.html#res.redirect),重定向可以是用于重定向到其他站点的标准URL
})
```
#### 通过前端控制台查看路径
* 我们点击登录后会在控制台进入的路径依次是
```js
// 这个路径是我们自己设置的
http://127.0.0.1:8080/auth/github

//这个路径是便利贴后发给GitHub服务器后的验证登录的路径
https://github.com/login/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fauth%2Fgithub%2Fcallback&client_id=e89343001d0334689ed3

// 验证成功后返回的callback路径
http://127.0.0.1:8080/auth/github/callback?code=d73ac0ca67b7d171b435
```
* 然后点击注销后跳转的路径是
```js
// 这是自己的设置的注销路径
http://127.0.0.1:8080/auth/logout

//马上会重定向到下面的主页面，因为前面设置了res.redirect('/')
http://127.0.0.1:8080/
```
#### req.logout()和req.session.destroy()
* 根据[文档](http://www.passportjs.org/docs/logout/)可以知道Invoking logout() 将会移除req.user属性还会清空登陆的session(如果有)，**但是经过测试这里的req.session还是存在,具体不知道为什么**所以还增加了[req.session.destroy()](https://www.npmjs.com/package/express-session)
```js
router.get('/logout', function(req, res){
  // console.log('logout前的req',req.user)
  // console.log('logout前的req.session',req.session)
  req.logout();
  req.session.destroy()
  //这里如果只是设置的req.logout()，虽然可以清除req的信息，但是这里很奇怪还存在req.session，所以还需要清除req.session，所以req.logout()和req.session.destroy()一起使用。
  // 因为第一次登陆页面后台会发送一个set-cookie的响应头给前端设置cookie，以后前端每次发请求都会带上这个cookie。但是这里如果使用req.session.destroy()清除了session，那么客户端的cookie中就没有sessionId，后端会再次set-cookie给前端，前端再次把这个后端的cookie放到客户端的cookie里面保存。
  // console.log('logout后的req',req.user)
  // console.log('logout后的req.session',req.session)
//   express-session依赖的[req.session.destroy](https://www.npmjs.com/package/express-session),销毁session并取消设置req.session属性
  res.redirect('/');
//   express框架的重定向[res.redirect](http://expressjs.com/en/5x/api.html#res.redirect),重定向可以是用于重定向到其他站点的标准URL
})
```
#### cookie和session的补充
* 这里如果只是设置的req.logout()，虽然可以清除req的信息，但是这里很奇怪还存在req.session，所以还需要清除req.session，所以req.logout()和req.session.destroy()一起使用。
* 因为第一次登陆页面后台会发送一个set-cookie的响应头给前端设置cookie，前端会以sessionId的形式存在浏览器的cookie里面。以后前端每次发请求都会带上这个cookie。但是这里如果使用req.session.destroy()清除了session，那么客户端的cookie中就没有sessionId，后端会再次set-cookie给前端，前端再次把这个后端的cookie放到客户端的cookie里面保存。
* **内存中的cookie中的sessionId和req.session好像有点不同**
#### 有时候点击登录授权的时候会弹出错误
* **不知道是不是本地测试的原因，还是网络原因，毕竟我的电脑有时候连网页和视频都打不开**
* 报错的网址是回调callback的网址加上code这个授权码
```
http://127.0.0.1:8080/auth/github/callback?code=cb120aa28b9ff1d2afe2
```
* 报错信息
```js
Failed to obtain access token
InternalOAuthError: Failed to obtain access token
    at Strategy.OAuth2Strategy._createOAuthError (D:\jirengu\github收集\Node-Express-online-memo\node_modules\passport-oauth2\lib\strategy.js:408:17)
    at D:\jirengu\github收集\Node-Express-online-memo\node_modules\passport-oauth2\lib\strategy.js:175:45
    at D:\jirengu\github收集\Node-Express-online-memo\node_modules\passport-github\lib\strategy.js:75:25
    at D:\jirengu\github收集\Node-Express-online-memo\node_modules\oauth\lib\oauth2.js:191:18
    at ClientRequest.<anonymous> (D:\jirengu\github收集\Node-Express-online-memo\node_modules\oauth\lib\oauth2.js:162:5)
    at ClientRequest.emit (events.js:182:13)
    at TLSSocket.socketErrorListener (_http_client.js:391:9)
    at TLSSocket.emit (events.js:182:13)
    at emitErrorNT (internal/streams/destroy.js:82:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
```
* 有时候报错是这样的
```js
Failed to fetch user profile
InternalOAuthError: Failed to fetch user profile
    at D:\jirengu\github收集\Node-Express-online-memo\node_modules\passport-github\lib\strategy.js:122:19
    at ClientRequest.<anonymous> (D:\jirengu\github收集\Node-Express-online-memo\node_modules\oauth\lib\oauth2.js:162:5)
    at ClientRequest.emit (events.js:182:13)
    at TLSSocket.socketErrorListener (_http_client.js:391:9)
    at TLSSocket.emit (events.js:182:13)
    at emitErrorNT (internal/streams/destroy.js:82:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```
* **但是只需要重启服务器基本上就可以正常了**
* 正常情况应该是
用户同意授权， GitHub 就会跳转到callback URL指定的跳转网址，并且带上授权码(code)，跳转回来的 URL 就是下面的样子。
```js
http://127.0.0.1:8080/auth/github/callback?code=cb120aa28b9ff1d2afe2
```
* 后端收到这个请求以后，就拿到了授权码（code参数）
## 登陆的权限控制
* 当用户没有登陆的时候进入可以看到所有的便利签。**但是编辑，删除，增加便利签的时候提示请登陆**
* 登陆后展示的是自己创建的便利签，这时候就可以编辑，删除和增加便利签了。注销后可以展示所有的，包括自己的。所以这些便签就有一个**归属的概念，就是哪个便签是规谁创建的**。
* 因为有了归属，那么需要在数据库里面增加一个属性uid,归属的权限就是先进行`req.session.user`是否存在进行判断，如果不存在就提示**请先登录**
```js
router.post('/notes/add', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.create()//后面的代码省略

});
/* 修改note */
router.post('/notes/edit', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.update()//后面的代码省略 
});
/* 删除note */
router.post('/notes/delete', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.destroy()//后面的代码省略
});

module.exports = router;
```
* 增加这个Note是谁创建的归属uid,还可以把用户的头像和名字还有创建事件都可以写进去
### express-session的报错
* 有如下报错
```
Sun, 26 Jul 2020 08:07:14 GMT express-session deprecated undefined resave option; provide resave option at app.js:38:9
Sun, 26 Jul 2020 08:07:14 GMT express-session deprecated undefined saveUninitialized option; provide saveUninitialized option at app.js:38:9
```
* 解决办法就是增加下面代码
```js
app.use(session({
  secret: 'keyboard cat',
  resave:true,//这个是增加的
  saveUninitialized:true//这个是增加的
  // cookie:{secure:true}
}));
```
* 因为[官网](https://www.npmjs.com/package/passport)就是这么写的
* [express-session 保存遇到的问题](https://www.cnblogs.com/kevinlvhsl/p/5223840.html)
* [express-session启动警告deprecated undefined resave option](https://blog.csdn.net/start_p/article/details/84657486)
* [express-session启动警告deprecated undefined resave option](https://www.iteye.com/blog/guard-2122745)
### promise的再次测试
* 首先Note.create的是异步的，然后存在返回值，所以下一个then可以获取到这个返回值作为参数，也就是notes
```js
router.post('/notes/add', function(req, res, next) {
  Note.create({text:req.body.note})
    Note.findAll({
      raw: true
    })//因为findAll是返回整个model，并且成功了，所以把返回值作为下一个then的参数，也就是notes
    .then(function(notes){
      console.log(notes,'notes')
    })
});
```
* 第一个Note.create是由返回值的，并且是异步，那么下一个notes是整个model，但是第二个then里面没有返回值，所以第三个then里面的notes是undefined。第二个then里面的返回值赋值给a，因为是异步的，所以出于pending状态
```js
router.post('/notes/add', function(req, res, next) {
  Note.create({text:req.body.note})//post请求的的数据是在req.body里面去获取
  .then(function(notes){
    var a=Note.findAll({//因为这里并没有把a返回出去，所下一个then的notes里面什么都没有就是undefinde
      raw: true
    })
  
    console.log(notes,'notes')//但是它本身的notes是上一个Note.create的返回值，也就是整个model，是存在的
    console.log(a,'a')//这个a就是Note.findAll的返回值，也是整个model,但是它是异步的，这里处于pending状态，需要.then成功后获得。
    // return a
  })
  .then(function (notes) {
    console.log(notes,'notes')//这里因为上一个then里面没有返回值，那么notes就是undefined
  })
});
```
* 如果我把第二个then的返回值返回出去，那么第三个then就可以获取到这个返回值，也就是整个model了
```js
router.post('/notes/add', function(req, res, next) {
  Note.create({text:req.body.note})
  .then(function(notes){
    var a=Note.findAll({
      raw: true
    })
    console.log(notes,'notes')
    console.log(a,'a')
    return a//把第二个then里面的Note.fineAll的返回值返回出去给第三个then的参数使用
  })
  .then(function (notes) {
    console.log(notes,'notes')
  })
});
```
* 全部返回结果参考官网的[then](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
### 关联Associations
* **这部分我看的不是很明白，测试也总是报错,以后再看怎么解决吧**
* [Sequelize官方中文文档 6. Associations - 关联](https://www.jianshu.com/p/13b59e11ab4c)
* [Sequelize官方GitHub](https://github.com/sequelize/sequelize)
* [Sequelize官方中文文档](https://github.com/demopark/sequelize-docs-Zh-CN)
* [Sequelize官方英文文档](https://sequelize.org/)
* [Sequelize使用总结（模型，关联表，事务，循环，及常见问题）](https://blog.csdn.net/weixin_37778679/article/details/82692584)
* [Node.js Sequelize 模型(表)之间的关联及关系模型的操作](https://blog.csdn.net/qq_27970999/article/details/89856966)
* [【知识整理】Node.js-Sequelize之模型（表）之间的关联关系](https://blog.csdn.net/qq_19891827/article/details/77967044)
* [Associations - 关联](https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/assocs.md)
## 解决了一个问题（我觉得值得庆祝和记录），点击add会显示名字，刷新后还是会显示名字
* 目前我还只是在一个数据库表里面存了用户名字和内容，应该可以分开存储的，但是我前面的数据表关联学的不好，所以暂时不用这个方法，以后在说吧。
### 刚开始的时候点击add的时候不会显示名字，只有刷新后才会显示名字
* **因为刚开始的前端代码创建一个note在note-manager.js文件里面note里面没有任何参数**
```js
  function add(){//刚开始这里的add只有一个new Note()，没有任何参数，所以没有名字显示，后续还可以增加时间和头像
    new Note();
  }
```
* 但是在刷新后会显示名字，是因为,通过文件note.js的前端代码，发送路由为`/api/notes/add`的请求后提供了内容。
```js
  add: function (msg){
    console.log('addd...');
    var self = this;
    $.post('/api/notes/add', {note: msg})//这里提供的便利贴的内容
      .done(function(ret){
        if(ret.status === 0){
          Toast('add success');
        }else{
          self.$note.remove();
          Event.fire('waterfall')
          Toast(ret.errorMsg);
        }
      });
  },
```
* 对应的在后端对应的路由里面创建(Note.create)了数据，包括内容`text:req.body.note`,用户名`req.session.user.username`,uid`req.session.user.id`
```js
router.post('/notes/add', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.create({text:req.body.note,username:req.session.user.username,uid:req.session.user.id})//post请求的的数据是在req.body里面去获取
  //增加这个Note是谁创建的归属uid,另外可以把用户的头像和名字还有创建事件都可以写进去，但是不建议，正常的表和表之间通过一个key去做关联，除了Note这个数据表以外，还可以创建一个user表，这个user表只记录当前用户的信息，比如uid为1的用户，的中文姓名，头像，邮箱，手机号，密码的加密后的信息等，然后两个表之间通过uid做一个关联即可。
  Note.findAll({raw:true})
  .then(function(notes){
    res.send({status:0,data:notes})//因为增加note的前端代码就实现了效果，后端只需要告诉前端增加成功即可。成功就是{status:0}
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
* 用户名是从第三方验证的文件auth.js中获得得到的
```js
router.get('/github/callback',//当有回调函数回来之后，就会真正的得到这些用户信息，这个过程是github账号体系自己返回的的它发的这个请求。这个路由是回调地址，也就是便利贴网站需要接收的请求的地址。
  passport.authenticate('github', { failureRedirect: '/login' }),//失败的话会进入到登陆的路由
  function(req, res) {//成功会进入到这里，这是github服务器想便利贴后台发送的这些数据，存在req.user里面
    req.session.user = {//成功后就给响应的session里面的user增加id,username,avatar,provider
      id: req.user.id,//这里的req.user的信息在前面的console.log(user)里面可以看到，用户id
      username: req.user.displayName || req.user.username,//用户名字
      avatar: req.user._json.avatar_url,//用户头像
      provider: req.user.provider//信息的提供方
    };
    res.redirect('/');
  });
```
* 所以刷新后的后端的代码路径`notes`在api.js文件中就会显示之前的数据库存的内容加上刚刚增加的那一个便利贴内容。
```js
router.get('/notes', function(req, res, next) {
  Note.findAll({raw:true})
  .then(function(notes){
    console.log(notes)
    res.send({status:0,data:notes})
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
  // console.log('/notes');
});
```
* 然后前端收到这个刷新后的路径对应的响应就会去获取到所有的便利贴并且通过`new Note()`创建，包括刚刚增加的那一个，这里面有用户名，id和内容,在note-manager.js文件中
```js
  function load() {//页面刚进来需要向服务器发请求去得到所有数据，然后加载所有数据渲染让用户看到,在app.js里面有触发这个load函数
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
            // console.log($.each)
          $.each(ret.data, function(idx, article) {
            //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
            // jQuery.each( collection, callback(indexInArray, valueOfElement) )
            // https://www.jquery123.com/jQuery.each/
            // 也就是遍历第一个参数ret.data
            // console.log(idx,article,'idx:article')
              new Note({//前端获取到后端的数据后去创建note
                id: article.id,//id
                context: article.text,//便利贴内容
                username: article.username//用户名字
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });
```
* 小结
  * 点击增加按钮的时候没有后端路径触发,然后**前端增加一个note便利签不带名字**。
  * 失去焦点的时候就触发路径`/notes/add`。然后对应的**后端路径会Note.create增加一个便利签在数据库里面。**
  * **刷新后，触发路径`/notes`获取所有note然后给前端对应的路径，然后就创建数据库里面的所有note，包括刚刚创建的，这里的note是包括用户名的，所以刷新后才会显示名字。**
### 点击add的时候会显示名字，刷新后还会显示名字
* 就是在这之前新建一个note是不会显示名字的，需要刷新后才能显示名字。我通过增加一个路由`addfirst`路由.
* 并且这里还用到了new Promise成功后把resolve的值传给下一个then的第一个函数的参数的办法。具体见[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise),因为前端发了请求后，后端需要告诉这个请求的用户名字是哪个，这个值可以直接通过`req.session.user.username`获取，所以就把这个值传过去给前端用即可。这只是为了前端显示效果，**因为刷新后的路径/notes会获取到数据库里面的信息，然后创建note**
* 通过**这个addfirst路由不创建任何数据，就不影响数据库内容**,把**所有获取后端数据库内容和前端部分创建所有note**的都放到了路由`/notes`。但是在`notes/add`路由**单独在数据库里面创建一个notes**
```js
router.post('/notes/addfirst', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }

  new Promise((resolve,reject)=>resolve(req.session.user.username))//new Promise成功后把resolve的值传给下一个then的第一个函数的参数的办法
  .then(function(username){
    console.log(username)
    res.send({status:0,data:username})//因为增加note的前端代码就实现了效果，后端只需要告诉前端增加成功即可。成功就是{status:0}
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
* 前端在note-manager.js文件里面的add函数里面获取到后端提供的用户名字创建一个便利贴`new note()`，**这里面带用户名这个参数**。
```js
  function add(){
    $.post('/api/notes/addfirst')
    .done(function(ret){//这里的ret就是后端传给前端的数据
      if(ret.status === 0){
        console.log(ret)
        // NoteManager.add(ret)
        new Note({//前端获取到后端的用户名后去创建note
          username:ret.data
      });
        Toast('please input content "in input here"');//创建之前提醒用户输入内容
      }else{
        Toast(ret.errorMsg);
      }
    });
```
* 后续还可以增加创建时间和头像。
* 小结
  * 点击增加按钮的时候触发路径`/notes/addfirst`,仅仅查找并不是创建用户名并且通过promise返回给前端使用。,然后**前端增加一个note便利签带名字**。并弹出please input content "in input here"
  * 失去焦点的时候就触发路径`/notes/add`。然后对应的**后端路径会Note.create增加一个便利签在数据库里面。**
  * **刷新后，触发路径`/notes`后端获取所有note然后给前端对应的路径，然后就创建数据库里面的所有note，包括刚刚创建的，这里的note是包括用户名的，所以刷新后才会显示名字。**
## 继续前面的权限控制，用到session（自己写的）
* 前面说到增加一个归属uid。
```js
router.get('/notes', function(req, res, next) {
  Note.findAll({raw:true})
  .then(function(notes){
    console.log(notes)
    res.send({status:0,data:notes})
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
  // console.log('/notes');
});
/* 创建note */
router.post('/notes/add', function(req, res, next) {
  // 对于post请求是req.body,如果是get请求就是req.query
  // http://expressjs.com/en/5x/api.html#req.body
  // http://expressjs.com/en/5x/api.html#req.query
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.create({text:req.body.note,username:req.session.user.username,uid:req.session.user.id})//增加uid
  Note.findAll({raw:true})
  .then(function(notes){
    res.send({status:0,data:notes})//因为增加note的前端代码就实现了效果，后端只需要告诉前端增加成功即可。成功就是{status:0}
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});

/* 修改note */
router.post('/notes/edit', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.update(
    {text:req.body.note},//只需要修改对应id的text内容就可以了
    {
      where:{
        id:req.body.id,
        uid:req.session.user.id//增加uid
      }
  })
  .then(function(notes){
    console.log('arguments',arguments[0])
    console.log('notes',notes)
    res.send({status:0});
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
/* 删除note */
router.post('/notes/delete', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.destroy({
    where:{
      id:req.body.id,
      uid:req.session.user.id//增加uid
    }
  })
  .then(function(notes){
    res.send({status:0});
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
* 如果不在编辑和删除里面增加uid这个属性也是可以通过对应的id找到的，因为id也是唯一的。只要登录也可以编辑和删除，**但是问题是凡是登录的用户可以删除任何信息，只要登录的用户可以发送AJAX请求，那么登陆状态请求生效就会删除别人的信息，如果有uid那么安全性就可以保证，因为uid是登陆用户的信息（每个用户不同，别人也不知道你的用户uid是什么），id是自动创建的编码（按照1234这样的顺序创建编码，这个就很好猜到）**
* 后端对安全性和后门比较需要下功夫。前端这一块就做的简单一点。不用管太多，这个安全性的责任主要在后端，不在前端。
* 增加session来控制不可以删除别人创建的便利贴(**不过这个功能基本用不到，因为后面还设置了登陆后别人创建的便利贴你自己看不到，所以我后面把这个功能在代码中注释掉了**)
```js
router.post('/notes/delete', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.findOne(
    {raw:true,
      where: {
        id:req.body.id,
        uid:req.session.user.id, 
        // [Op.and]:[
          // {id:req.body.id},
          // {uid:req.session.user.id},
        // ],
      }
    }
    // ,
    // { fields: ['uid'] }
    )
  .then(function(note){
    console.log(note,'note')
    if(note===null)//如果找不到对应的id和uid说明 这个便利贴不是登陆用户创建的，所以不能删除
    {
      res.send({status:1,errorMsg:'不可以删除别人的数据'})
      // console.log('没有找到')
    }
    else{//如果能找到就说明便利贴是登陆用户创建的，那就顺利删除
      Note.destroy({//这里的删除destroy要找到哪一个id，要使用where语句
        where:{
          [Op.and]:[
            {id:note.id},
            {uid:note.uid},
          ],
        },
      })
      .then(function(note){
        console.log(note,'note')
        res.send({status:0});
      })
      .catch(function(){
        res.send({status:1,errorMsg:'数据库出错'})
      })
    }
  })
```
* 增加session来控制权限后的代码,**主要是控制登陆后只能看到自己的创建的便利贴，别人创建的看不到。未登录状态可以看到所有的便利贴**
```js
router.get('/notes', function(req, res, next) {
if(req.session.user&&req.session.user.id){//如果req.session.user存在说明已经登陆，就显示登陆部分的便利贴
  Note.findAll({raw:true,
    where:{
      uid:req.session.user.id
    }
  })
    .then(function(notes){
      console.log(notes)
      res.send({status:0,data:notes})
    })
    .catch(function(){
      res.send({status:1,errorMsg:'数据库出错'})
    })
}
else{//如果没有登陆就显示所有的便利贴。
  Note.findAll({raw:true})
    .then(function(notes){
      console.log(notes)
      res.send({status:0,data:notes})
    })
    .catch(function(){
      res.send({status:1,errorMsg:'数据库出错'})
    })
    }
});
```
* 以上是自己写的代码，但是比较乱，所以后面看了老师代码后稍微优化了
## 对比老师的代码后稍微把代码优化了notes路径的后端代码
* 主要时候路径`/notes`
* 修改前
```js
router.get('/notes', function(req, res, next) {
if(req.session.user&&req.session.user.id){//如果req.session.user存在说明已经登陆，就显示登陆部分的便利贴
  Note.findAll({raw:true,
    where:{
      uid:req.session.user.id
    }
  })
    .then(function(notes){
      console.log(notes)
      res.send({status:0,data:notes})
    })
    .catch(function(){
      res.send({status:1,errorMsg:'数据库出错'})
    })
    // console.log('/notes');
}
else{//如果没有登陆就显示所有的便利贴。
  Note.findAll({raw:true})
    .then(function(notes){
      console.log(notes)
      res.send({status:0,data:notes})
    })
    .catch(function(){
      res.send({status:1,errorMsg:'数据库出错'})
    })
  }
});
```
* 修改后简介很多
```js
router.get('/notes', function(req, res, next) {
  var opts={raw:true}
  if(req.session&&req.session.user){//如果req.session.user存在说明已经登陆，就显示登陆部分的便利贴
    opts.where={uid:req.session.user.id}
  }
  Note.findAll(opts)
  .then(function(notes){
    console.log(notes)
    res.send({status:0,data:notes})
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
## 小结
* 我们使用了组件化的方式去写代码。
* 使用了事件发布订阅模式去实现一些功能。
* 使用webpack去打包，去实现代码的模块化。
* less去写CSS
* 使用了npm script使我们的整个启动执行更方便。
* 后端用了express。了解了整个网站的架构。、
* MVC的概念。
* 模板引擎的简单使用
* 中间件，路由，模型，数据库，cookie，session，登录注册等知识
* 复杂的网站只是逻辑更多一些，内容也就是涉及打上面的知识。
* 前后端分离，页面逻辑由前端做，后端提供标准的接口。相当于把view层拆分出来由前端去管理，那么前端就不需要把后端的数据库网站搭起来，只需要连接后端提供的接口即可。
* 后续可以增加HTML5的API 全屏效果，还有不用瀑布流，但是记住便利贴的位置，下次刷新还在这个位置。还可以增加聊天，弹幕和音乐等功能。
## 优化CSS和UI，增加时间和用户显示
### 增加时间显示
* 因为后端sqlite不能用修改时间参数。不能显示北京时间，报错如下
```js
Error: Setting a custom timezone is not supported by SQLite, dates are always returned as UTC. Please remove the custom timezone parameter.
```
* 所以我在note.js文件中创建时间函数
```js
  getTime(){
    var myDate = new Date();
    function getNow(s) {
      return s < 10 ? '0' + s: s;
      }
    var year = myDate.getFullYear(); //获取当前年
    var month = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var Hours = myDate.getHours(); //声明变量Hours 获取当前时间的时
    var Minutes = myDate.getMinutes(); //声明变量Minutes 获取当前时间的分
    var Seconds = myDate.getSeconds(); //声明变量Seconds  获取当前时间的秒
    let createTime = year + "年" + month + "月" + date + "日"+' '+getNow(Hours)+':'+getNow(Minutes)+':'+getNow(Seconds)
    return createTime
  },
```
* 后端也在初始化数据的时候初始化这个事件的属性。**另外这个因为新增后不刷新的话，数据并不是后端返回的数据，所以这里同时增加`window.location.reload()`刷新页面后就是获取到后端数据了，防止出错**
```js
// 后端数据文件node.js里面初始化
    createTime: Sequelize.STRING
```
* 在增加路径`/notes/add`的时候把这个时间传给后端。
```js
  add: function (msg,createTime){
    console.log('addd...');
    var self = this;
    $.post('/api/notes/add', {note: msg , createTime:createTime})//增加时间参数发请求给后端
      .done(function(ret){
        if(ret.status === 0){
          Toast('add success');
          setTimeout(() => {
            window.location.reload()//如果不刷新，那么同样的note上面修改会导致增加事件而不是编辑事件。
          },1800);
        }else{
          self.$note.remove();
          Event.fire('waterfall')
          Toast(ret.errorMsg);
        }
      });
  },
```
* 让后端保存这个时间
```js
router.post('/notes/add', function(req, res, next) {
  // 对于post请求是req.body,如果是get请求就是req.query
  // http://expressjs.com/en/5x/api.html#req.body
  // http://expressjs.com/en/5x/api.html#req.query
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  Note.create({text:req.body.note,createTime:req.body.createTime,username:req.session.user.username,uid:req.session.user.id})//增加时间属性保存在数据库
  Note.findAll({raw:true})
  .then(function(notes){
    res.send({status:0,data:notes})
  })
  .catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
});
```
### 增加小圆角
* 文件note.less,参考这个[UI](https://codepen.io/shubhamc_007/pen/JwMbEd?editors=0010)
```css
    .note-ct{
      border-bottom-left-radius: 5px 5px;
      border-bottom-right-radius: 20px 20px;
      padding: 10px;
      background-color: #efb04e;
      outline: none;
      overflow:hidden;
      position: relative;
      min-height:100px;
    }

    .note-ct:before{
      content: "";
      position: absolute;
      bottom: -8px;
      right: -8px;      
      border-radius:5px;
      border-style: solid;
      border-color: #fff0 #fff0 #ffffffe6 #ffffffe6;
      background: #fff;
      -webkit-box-shadow:0px 0px 15px 4px #0c0f4180;
      -moz-box-shadow: 0px 0px 15px 4px #0c0f4180;
      box-shadow: 0px 0px 15px 4px #0c0f4180;
      /* Firefox 3.0 damage limitation */
      display: block; 
      width: 20px; 
      height:20px;
      opacity: 1;
    }
```
### 动态圆形按钮，用户增加便利贴和上滑到顶部
* index.less文件,参考这个[UI](https://codepen.io/shubhamc_007/pen/JwMbEd?editors=0010)
```less
  .add-note{
    width:50px;
    height:50px;
    border-radius:50%;
    border:none;
    background-color:#6039e0;
    color:#fff;
    position:fixed;
    right: 20px;
    bottom:40px;
    box-shadow: 0px 0px 0px 4px #6039e066;
    animation: pulse 2s infinite;
    box-shadow:none;
    cursor:pointer;
  }
  .btn-toTop{
    width:50px;
    height:50px;
    border-radius:50%;
    border:none;
    background-color:#6039e0;
    color:#fff;
    position:fixed;
    right: 20px;
    bottom:100px;
    box-shadow: 0px 0px 0px 4px #6039e066;
    animation: pulse 2s infinite;
    box-shadow:none;
    cursor:pointer;
  }
```
* index.js文件里面增加滑动到顶部的代码,具体参考[Jquery 实现页面滚动到顶端](https://www.cnblogs.com/oiliu/p/4735928.html)
* 用到的API是[animate](https://www.jquery123.com/animate/)和[scrollTop()](https://www.jquery123.com/scrollTop/)
```js
$('.btn-toTop').on('click', function(){
  console.log('111')
  $('html, body').animate({ scrollTop: 0 }, 1000,'linear')
})
```
### 增加删除的icon
* 具体在icon.less文件里面。
### 经过webpack打包后CSS文件全都在 index.js文件里面包括了
* 经过webpack打包后CSS文件全都在 index.js文件里面包括了，所以之前的引入css可以删除了，之前可能是测试某些东西用的,在index.ejs里面注释这句代码
```html
    <!-- <link rel="stylesheet" href="./css/index.css"> -->
```
### 前面删除了public的css文件后发现出错了
* **检查到了晚上三点终于发现，是这个代码的问题，在index.ejs文件里面把这句代码注释就可以了，可能是如果有class就必须要给他对应的css编码吧。其实是用不了这个class的**
```html
    <!-- <div class="stars"></div> -->
```
### 增加和顶部的icon,旋转效果，随机颜色取消
* 旋转效果参考的[UI来自这里](https://codepen.io/engza/pen/BwLqLR),在note.less里面增加代码
```less
.note{
    position: absolute;;
    color: #333;
    width: 250px;
    margin: 20px 10px;
    transition: all 0.5s;
    transform: rotate(0deg);
    border-top-left-radius: 5px 5px;
    border-top-right-radius: 5px 5px;
    border-bottom-left-radius: 5px 5px;
    border-bottom-right-radius: 20px 20px;
    
    -webkit-transform: rotate(0deg);
      &:hover {
        transform: rotate(2deg);
      }
    &:nth-child(odd) {
      transform: rotate(2deg);
      // position: relative;
      // top: .1875rem;
      background: #cfc;
      &:hover {
        transform: rotate(0deg);
      }
    }

    &:nth-child(3n) {
      transform: rotate(-1.5deg);
      // position: relative;
      // top: -.1875rem;
      &:hover {
        transform: rotate(0deg);
      }
    }
    &:nth-child(3n-1) {
      transform: rotate(2.5deg);
      // position: relative;
      // top: -.3125rem;
      background: #ccf;
      &:hover {
        transform: rotate(0deg);
      }
    }
```
* 增加和顶部icon,在icon.less文件里面
```less
.icon-shang:before {
  content: "\e600";
}

.icon-zengjia:before {
  content: "\e619";
}
```
* 另外note的随机颜色我改成只显示一种颜色了。
### 上传到服务器上运行的时候报错
* 报错主要原因是**sqlite3这个依赖**，这个依赖[sqlite3](https://www.npmjs.com/package/sqlite3)主要是经过查询发现应该是不支持node9.0了，但是老师的服务器上的node还是9.1版本，经过更新后解决了。
* 另外安装sqlite3的时候老师和部分网上推荐用淘宝的源安装，安装命令如下
```sh
npm install sqlite3 --registry=http://registry.npm.taobao.org
```
* 服务器的说明看[这里](https://xiedaimala.com/tasks/8a355066-791a-4597-a695-3fc403354bbb/text_tutorials/c3f0b185-8bb0-4d2d-be46-257e25e3701d)
* 这里的www目录是在服务器的根目录下面。（看不到他，需要输入cd /www）
* **我在这个目录下面增加了域名对应的id和端口，但是这个域名还是访问不了，不知道为什么**
## 继续优化
* 增加github的icon
* 增加新增的note出现在中间，颜色与其他颜色不同。并且周围暗化。
* 增加新增的note后的确定按钮的icon。
* 移除失去焦点触发增加事件，增加点击确定按钮触发增加事件。
* 调整header样式
* 修改背景颜色。
* 移除粘贴事件后触发瀑布流事件。
* 增加hover后出现内容区的边框颜色变化
* 用到的API
  * [Element.scrollHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight)
* [jquery如何删除一个css属性](https://m.imooc.com/wenda/detail/526897)
* [使用jQuery移除css属性](https://blog.csdn.net/qq_43382853/article/details/100715018)
* [jquery如何获取第一个或最后一个子元素？](https://www.cnblogs.com/jpfss/p/9512098.html)
* [如何选择jQuery中的最后一个子元素？](https://www.imooc.com/wenda/detail/597950)
* [jquery 有没有 scrollHeight来获取实际的高度](https://zhidao.baidu.com/question/1925237225722830587.html)
* 服务器设置[看这里](https://xiedaimala.com/tasks/8a355066-791a-4597-a695-3fc403354bbb/text_tutorials/c3f0b185-8bb0-4d2d-be46-257e25e3701d)
## 完成
* 最后上传到服务器上之后需要修改github上面的回调地址和auth.js里面的回调地址。
```js
callbackURL: "http://47.91.156.35:3030//auth/github/callback"
```
## 其他
### npm 如何查看一个包的版本信息？
* [npm 如何查看一个包的版本信息？](https://blog.csdn.net/cvper/article/details/79543262?utm_source=blogxgwz15
###  pm2从入门到精通
* [ pm2从入门到精通](https://www.kancloud.cn/daiji/pm2/395298)
### Linux下vim编辑器命令大全
* [Linux下vim编辑器命令大全](https://www.jianshu.com/p/00c4e8d82303)
### 域名配置
* 我用到的是namesilo，老师提供的域名前面要增加@和www和*。但是我的这个服务器不能增加@，具体请看这里[namesilo域名解析教程](http://www.bestvpser.com/166.html).前面三个分别代码什么，请看这里[域名解析前面的前缀* @ www 分别代表什么](https://www.cnblogs.com/azhqiang/p/10830755.html)
### 如何ping一个域名
* [如何ping一个域名](https://zhidao.baidu.com/question/248357763.html)
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
### node调试工具
* 调试工具就是为了不再node.js环境下调试，**因为node.js环境下面调试比较麻烦，如果换成在浏览器中调试会方便很多，显示的内容也会多一些**。
#### 老师推荐的node-inspector已经不能使用了
* 安装[node-inspector](https://www.npmjs.com/package/node-inspector),Node Inspector是使用Blink开发人员工具（以前称为WebKit Web Inspector）的Node.js应用程序的调试器接口。
```js
npm i node-inspector
```
* **老师推荐的node-inspector已经不能使用了，经过测试安装会报错**
```sh
node-pre-gyp ERR! Tried to download(404): https://npm.taobao.org/mirrors/node-inspector/debug/v1.0.1/node-v64-win32-x64.tar.gz
node-pre-gyp ERR! Pre-built binaries not found for v8-debug@1.0.1 and node@10.13.0 (node-v64 ABI, unknown) (falling back to source compile with node-gyp)
node-pre-gyp http 404 status code downloading tarball https://npm.taobao.org/mirrors/node-inspector/debug/v1.0.1/node-v64-win32-x64.tar.gz
node-pre-gyp ERR! Tried to download(undefined): https://npm.taobao.org/mirrors/node-inspector/debug/v1.0.1/node-v64-win32-x64.tar.gz
node-pre-gyp ERR! Pre-built binaries not found for v8-debug@1.0.1 and node@10.13.0 (node-v64 ABI, unknown) (falling back to source compile with node-gyp)
node-pre-gyp http Connection closed while downloading tarball file
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:484:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:509:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:154:21)
gyp ERR! System Windows_NT 10.0.18363
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "configure" "--fallback-to-build" "--module=D:\\jirengu\\github收集\\Node-Express-online-memo\\node_modules\\v8-debug\\build\\debug\\v1.0.1\\node-v64-win32-x64\\debug.node" "--module_name=debug" "--module_path=D:\\jirengu\\github收集\\Node-Express-online-memo\\node_modules\\v8-debug\\build\\debug\\v1.0.1\\node-v64-win32-x64"
gyp ERR! cwd D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug
gyp ERR! node -v v10.13.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
node-pre-gyp ERR! build error
node-pre-gyp ERR! stack Error: Failed to execute 'D:\Program Files\nodejs\node.exe D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js configure --fallback-to-build --module=D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug\build\debug\v1.0.1\node-v64-win32-x64\debug.node --module_name=debug --module_path=D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug\build\debug\v1.0.1\node-v64-win32-x64' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (D:\jirengu\github收集\Node-Express-online-memo\node_modules\node-pre-gyp\lib\util\compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:962:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:251:5)
node-pre-gyp ERR! System Windows_NT 10.0.18363
node-pre-gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\jirengu\\github收集\\Node-Express-online-memo\\node_modules\\node-pre-gyp\\bin\\node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug
node-pre-gyp ERR! node -v v10.13.0
node-pre-gyp ERR! node-pre-gyp -v v0.6.39
node-pre-gyp ERR! not ok
Failed to execute 'D:\Program Files\nodejs\node.exe D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js configure --fallback-to-build --module=D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug\build\debug\v1.0.1\node-v64-win32-x64\debug.node --module_name=debug --module_path=D:\jirengu\github收集\Node-Express-online-memo\node_modules\v8-debug\build\debug\v1.0.1\node-v64-win32-x64' (1)
npm WARN css-loader@3.6.0 requires a peer of webpack@^4.0.0 || ^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN style-loader@1.2.1 requires a peer of webpack@^4.0.0 || ^5.0.0 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! v8-debug@1.0.1 install: `node-pre-gyp install --fallback-to-build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the v8-debug@1.0.1 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\bomber\AppData\Roaming\npm-cache\_logs\2020-07-18T14_47_59_189Z-debug.log
```
* 经过搜索，发现已经有多人博客有过描述了
  * [Node.js 8+之后node-inspector报错如何解决](https://www.jianshu.com/p/44bf228c35ac)
  * [NodeJs调试工具node-inspector安装失败](https://www.ddkiss.com/archives/106.html)
  * [node inspector的安装以及使用【已经淘汰了】](https://www.cnblogs.com/chucklu/p/9101886.html)
#### 现在使用node-inspect，注意不是node-inspector
* 我的node版本是
```js
v10.13.0
```
* 自带了node-inspect，所以不用单独安装,当然也可以独立安装.具体说明见[这里](https://nodejs.org/en/docs/guides/debugging-getting-started/#browsers-websockets-and-same-origin-policy)
* 独立安装的说明：
  * [node-inspect命令行工具的调试使用方法](https://cloud.tencent.com/developer/article/1438864)
  * [node-inspect命令行工具的调试使用方法](https://blog.csdn.net/i042416/article/details/89231282)
* 结合[node官网的调试说明](https://nodejs.org/en/docs/guides/debugging-getting-started/#browsers-websockets-and-same-origin-policy)和[阮一峰的Node 调试工具入门教程](http://www.ruanyifeng.com/blog/2018/03/node-debugger.html)，还有自己的实践。步骤如下
  1. 因为我的node.js的入口是在bin目录下面的www文件，那么首选运行下面代码
      ```sh
        node --inspect ./bin/www
      ```
  2. 然后会显示如下信息
      ```sh
          $ node --inspect ./bin/www
          Debugger listening on ws://127.0.0.1:9229/fa0bbfb1-345e-41dd-913f-a337f0d415bf
          For help, see: https://nodejs.org/en/docs/inspector
          Debugger attached.
      ```
  3. 接下来有两种方式调试
      1. 第一种是在 Chrome 浏览器的地址栏，键入 `chrome://inspect`或者`about:inspect`，回车后就可以在Device里面**过一会**可以看到一个**Target**，点击进去就可以进入调试界面了,**但是这个方法我不能看到完整的文件目录，经过测试我不知道为什么这里不能显示整个目录，只能显示单个文件**
      2. 第二种进入调试工具的方法，是在 `http://127.0.0.1:3000` 的窗口打开"开发者工具"，顶部左上角有一个 Node 的绿色标志，点击就可以进入。因为我的bin目录下面的www文件的端口就是默认是3000端口。本地服务器的地址就是`http://127.0.0.1`,也可以是`http://localhost/`,打开开发者工具**左上角有一个绿色的node.js开发工具显示**，点击就可以进入到调试页面了，**这个可以显示整个目录**
* 我们还可以设置断点
  * 比如我在routes目录下的api.js文件的这里设置断点
    ```js
    var note=req.body.note
    ```
  * 当我在`http://127.0.0.1:3000`页面点击添加后，然后输入**文字1**后内容失去焦点后会触发路径`/notes/add`的add函数。
      ```js
        router.post('/notes/add', function(req, res, next) {
          // 对于post请求是req.body,如果是get请求就是req.query
          // http://expressjs.com/en/5x/api.html#req.body
          // http://expressjs.com/en/5x/api.html#req.query
          var note=req.body.note
          console.log('add','note',note)
          console.log(req)
        });
      ```
  * 会马上跳转到调试页面，并且右上角会有一个**Paused on breakpoint**，说明Node 主线程处于暂停（paused）阶段。此时我们还可以打印出当前变量比如req,res,req.body,req.body.note.
      ```js
        req
        IncomingMessage {_readableState: ReadableState, readable: false, _events: {…}, _eventsCount: 0, _maxListeners: undefined, …}
        res
        ServerResponse {_events: {…}, _eventsCount: 2, _maxListeners: undefined, output: Array(0), outputEncodings: Array(0), …}
        req.body
        {note: "1"}
        req.body.note
        "1"
      ```
  *  Sources 面板，右侧可以看到 Watch、Call Stack、Scope、Breakpoints 等折叠项。打开 Scope 折叠项，可以看到 Local 作用域和 Global 作用域里面的所有变量。
  * Local 作用域里面，变量req里面的body的note的值是1，双击把它改成别的，比如改成bomber,然后我们在控制打出req.body.note就变成了bomber
      ```sh
        req.body.note
        "bomber"
      ```
  * 命令行下，按下 ctrl + c，终止运行app.js
  * 另一个[参考博客_Nodejs 使用 Chrome DevTools 调试 --inspect-brk](https://www.cnblogs.com/CyLee/p/9320569.html)