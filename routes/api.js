var express = require('express');
var router = express.Router();

/* 
    1. 获取所有的note：GET方法。路径`/api/notes`.
        * 后台响应一般就是成功或者失败，然后传回对应的参数`res:{status:0，data:[{},{}]}`代表成功，如果是0以外的值，比如1，2，3等就是失败的。只不过失败的原因不同。另一个参数就是数据data，是一个数组，里面有不同的数据，每一个数据就是一个note。如果失败的了参数比如`{status:1,errorMsg:'失败的原因'}`
        * 所以如果status为0就可以把data获取到。如果status为1，就可以知道失败的原因(errorMsg)。
    2. 创建一个note,创建需要一个参数，那么后面的就是参数: 内容比较多，如果用get方法会拼接成url，可能放不下，而且安全性不好，所以这里用POST方法。路径`/api/notes/add`，参数`req:{note:'hello world'}`
        * 后台响应，如果成功就是`{status:0}`,失败了就是`{status:1或者2或者3，不是0都可以,errorMsg:'失败的原因'}`
    3. 修改一个note,POST方法(原因跟上面的一样)，路径`/api/notes/edit`,也需要传递参数`req:{note:'new note',id:100}`,需要传递id，因为要告诉后台你修改的是哪一个note。
        * 后台响应跟前面的类似
    4. 删除一个note.POST方法(原因跟上面一样)，路径`/api/notes/delete`,传递的参数`req:{id:100}`，只需要知道是删除哪一个note就可以，所以只需要一个id参数。
*/

/* 前端发的请求都会到这里对应的路由去执行响应的函数 */
/* 获取所有notes */
router.get('/notes', function(req, res, next) {
  console.log('/notes');
});
/* 创建note */
router.post('/notes/add', function(req, res, next) {
  // 对于post请求是req.body,如果是get请求就是req.query
  // http://expressjs.com/en/5x/api.html#req.body
  // http://expressjs.com/en/5x/api.html#req.query
  var note=req.body.note
  console.log('add','note',note)
  console.log(req)
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
