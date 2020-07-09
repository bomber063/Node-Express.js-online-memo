var a=require('./a.js').a//因为a.js里面exports出去的是一个对象也就是module.exports。我们需要用到里面的a属性，就是这么写
var a1=require('./a.js')

module.exports={
    b:'bbbb',
    a:a
}