var express = require('express');//引入express，从node_modules里面
var router = express.Router();//用express的Router函数

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
//这里有router.get路由,http://expressjs.com/en/5x/api.html#router.METHOD
// 这里有响应的渲染函数res.render,http://expressjs.com/en/5x/api.html#res.render

module.exports = router;
