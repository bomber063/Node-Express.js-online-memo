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
## 瀑布流布局
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