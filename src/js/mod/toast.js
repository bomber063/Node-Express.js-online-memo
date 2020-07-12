require('less/toast.less');
// var $=require('../lib/jquery-2.0.3.min.js')
// var $=require('jquery')

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
    // console.log(self,'我是self')
    this.$toast.fadeIn(300, function(){//默认是隐藏的，300ms后出现
        // console.log(self,'我是fadeIn里面的self')
        // console.log(this,'我是fadeIn里面的this')
      setTimeout(function(){
         self.$toast.fadeOut(300,function(){//消失之后再过300ms后删除
            // console.log(self,'我是fadeOut里面的self')
            // console.log(this,'我是fadeOut里面的this')
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
// console.log(Toast(),'我是Toast')

module.exports.Toast = Toast;
//不能module.exports= Toast; 因为左边的module.exports是一个对象，而右边的Toast是一个函数，如果Toast是一个对象那就可以赋值

