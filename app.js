var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();//express是一个node框架，通过调用express这个函数来得到这个app，整个网站的逻辑都是用这个app来处理的。

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板路径，__dirname当前模块的目录名。http://nodejs.cn/api/modules.html#modules_dirname
// path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。http://nodejs.cn/api/path.html#path_path_join_paths
// 也就是把当前的views文件夹设置为模板路径
app.set('view engine', 'ejs');//模板引擎是ejs
// views文件夹里面的文件就是ejs文件。代码类似这样
//<h1><%= message %></h1>
//<h2><%= error.status %></h2>
//<pre><%= error.stack %></pre>


// 下面的app.use都是中间件,http://expressjs.com/en/5x/api.html#app.use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//由这个模块得到cookie
app.use(express.static(path.join(__dirname, 'public')));
// 这里的express.static(path.join(__dirname, 'public'))就是把当前目录的public作为静态目录，可以加载images,javascript,stylesheets，http://expressjs.com/en/starter/static-files.html
// 就是假设请求的是public目录的文件，就不用走路由可以直接拿到这个文件里面的信息。

app.use('/', indexRouter);//当请求的路径是主页的时候就交给indexRouter函数去处理，下面的也是一样的意思。
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {//如果前面的中间件都没有匹配上就到了这里出现404
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // http://expressjs.com/en/5x/api.html#res.locals
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
