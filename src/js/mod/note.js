require('less/note.less');

var NoteManager = require('mod/note-manager.js').NoteManager;


// console.log(NoteManager,'note里面引入note-manager获取的是undefined')


var Toast = require('./toast.js').Toast;//有一些需要发网络请求，不管成功与否就可以通过Toast给页面展示提示。
var Event = require('mod/event.js');//主要用到绑定事件和触发事件用，类似发布订阅模式。通过调用别的事件函数，这里就是瀑布流事件waterfall.js，在index.js里面
// 如果把toast.js也变成一个立即执行函数并返回一个对象，那么也可以通过Event来绑定和触发该toast事件。
// console.log(Event)

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
    // console.log(this,'this')
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

    //设置笔记note的随着鼠标点击后拖动效果
    $noteHead.on('mousedown', function(e){
      var evtX = e.pageX - $note.offset().left,   //evtX 计算事件的触发点在 dialog内部到 dialog 的左边缘的距离
      //event.pageX鼠标点击位置相对于文档的左边缘的位置（左边）,https://www.jquery123.com/event.pageX/
      //.offset()在匹配的元素集合中，获取的第一个元素的当前坐标，或设置每一个元素的坐标，坐标相对于文档,.offset()返回一个包含top 和 left属性的对象 。
      //https://www.jquery123.com/offset/
          evtY = e.pageY - $note.offset().top;//evtY 计算事件的触发点在 dialog内部到 dialog 的顶部边缘的距离
          // console.log(e.pageY,'e,pageY')
          // console.log($note.offset().top,'$note.offset().top')
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
    $.post('/api/notes/add', {note: msg})//新增的需要提供内容。如果成功下面只是弹出toast提醒你成功了
      .done(function(ret){
        if(ret.status === 0){
          // NoteManager.add(ret)
        //   new Note({//前端获取到后端的数据后去创建note
        //     username:ret.data[ret.data.length-1].username
        // });
          Toast('add success');
          // window.location.reload()//如果不刷新，那么同样的note上面修改会导致增加事件而不是编辑事件。
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

