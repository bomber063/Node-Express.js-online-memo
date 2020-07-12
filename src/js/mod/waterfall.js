
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
        colSumHeight = [];//一个数组，作用是为了下面的检查出总的行高
  
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
  
  