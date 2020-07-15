
  var EventCenter = (function(){

    var events = {};

    function on(evt, handler){//绑定事件函数，evt是某一个事件名字，handler是事件执行函数
      events[evt] = events[evt] || []; //如果传过来的参数events[evt]事件里面没有，那创建一个空数组赋值，如果events[evt]事件里面已经有一个自己的事件了，就为自己

      events[evt].push({//往前面创建的空数组  或者已经存在的数组里面的events[evt]里面尾部push事件
        handler111: handler//events[evt]事件的名字都是handler111，里面的执行函数是传过来的handler
      });
    }

    function fire(evt, args){//触发事件函数
        // console.log(args,'args')
      if(!events[evt]){
        return;
      }
      for(var i=0; i<events[evt].length; i++){
        //   console.log(events)//events是一个对象
        //   console.log(events[evt])//events[evt]是一个数组
        //   console.log(events[evt][i].handler111,'handler111')
        //   console.log(events[evt][i].handler111(),'handler111()')
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
