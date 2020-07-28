var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
// var Toast = require('./toast.js').Toast;
var Event = require('mod/event.js');
// console.log(Note,'Note')


var NoteManager = (function(){

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

  function add(){//这个add和node.js里面的add有什么区别？
    $.post('/api/notes/addfirst')//新增的需要提供内容。如果成功下面只是弹出toast提醒你成功了
    .done(function(ret){
      if(ret.status === 0){
        console.log(ret)
        // NoteManager.add(ret)
        new Note({//前端获取到后端的数据后去创建note
          username:ret.data
      });
        Toast('please input content "in input here"');
        // window.location.reload()//如果不刷新，那么同样的note上面修改会导致增加事件而不是编辑事件。
      }else{
        Toast(ret.errorMsg);
      }
    });
  //todo
    // new Note();
  }

  return {
    load: load,//加载所有数据
    add: add
  }

})();

module.exports.NoteManager = NoteManager
//下面代码是把立即执行函数 返回对象修改为普通函数
// function noteManager(){
//   this.load();//创建toast节点函数
//   this.add();//显示toast节点函数
// }

// noteManager.prototype = {
//   load: function(){
//     $.get('/api/notes')
//       .done(function(ret){
//         if(ret.status == 0){
//             // console.log($.each)
//           $.each(ret.data, function(idx, article) {
//             //   $.each()函数和 $(selector).each()是不一样的，那个是专门用来遍历一个jQuery对象。$.each()函数可用于迭代任何集合，无论是“名/值”对象（JavaScript对象）或数组。在迭代数组的情况下，回调函数每次传递一个数组索引和相应的数组值作为参数。（该值也可以通过访问this关键字得到，但是JavaScript将始终将this值作为一个Object ，即使它是一个简单的字符串或数字值。）该方法返回其第一个参数，这是迭代的对象
//             // jQuery.each( collection, callback(indexInArray, valueOfElement) )
//             // https://www.jquery123.com/jQuery.each/
//             // 也就是遍历第一个参数ret.data
//             // console.log(idx,article,'idx:article')
//               new Note({//前端获取到后端的数据后去创建note
//                 id: article.id,
//                 context: article.text,
//                 username: article.username
//               });
//           });

//           Event.fire('waterfall');
//         }else{
//           Toast(ret.errorMsg);
//         }
//       })
//       .fail(function(){
//         Toast('网络异常');
//       });
//   },
//   add: function(){
//     $.post('/api/notes/addfirst')//新增的需要提供内容。如果成功下面只是弹出toast提醒你成功了
//     .done(function(ret){
//       if(ret.status === 0){
//         console.log(ret)
//         // NoteManager.add(ret)
//         new Note({//前端获取到后端的数据后去创建note
//           username:ret.data
//       });
//         Toast('please input content "in input here"');
//         // window.location.reload()//如果不刷新，那么同样的note上面修改会导致增加事件而不是编辑事件。
//       }else{
//         Toast(ret.errorMsg);
//       }
//     });

//   }
// };


// function NoteManager(){
//   return new noteManager();
// }