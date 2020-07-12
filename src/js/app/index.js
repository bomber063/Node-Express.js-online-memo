var Toast=require('../mod/toast.js').Toast//因为require()返回的是module.exports对象，但是我们需要里面的Toast属性
// var event=require('../mod/event.js')
var WaterFall=require('../mod/waterfall')

Toast('hello world')



WaterFall.init($('#content'));






















// event 事件中心测试代码
// event.on('click',function(a){
//     return a+' click第一次'
// })

// event.on('click',function(a){
//     return a+' click第二次'
// })


// event.on('touch',function (a){
//     return a+' touch第一次'
// })

// event.fire('click','click-a')

// event.fire('touch','touch-b')





