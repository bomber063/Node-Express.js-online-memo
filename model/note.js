const { Sequelize, DataTypes, Op } = require('sequelize');
var path=require('path')
// var Sequelize=require('sequelize')
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: 'localhost',//数据库的主机
    dialect: 'sqlite',//选用的数据库方言
    // storage: 'database/database.sqlite'//数据库的存放路径database.sqlite文件会自动创建
    storage: path.join(__dirname,'../database/database.sqlite')//数据库的存放路径database.sqlite文件会自动创建
});

//Sequelize构造函数除了可以接受host,dialect,storage，还可以接受很多选项。它们在API参考中记录。
//https://sequelize.org/master/manual/getting-started.html#installing
//https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor

// sequelize.authenticate()
// .then(function(){
//     console.log('Connection has been established successfully.');
// })
// .catch(function(err){
//     console.error('Unable to connect to the database:', error);
// })

//   上面的代码可以变化为try await catch,
// 当然上面的代码可以变化为try await catch,[官网的例子](https://sequelize.org/master/manual/getting-started.html)没有写[async关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function),并且还需要把这个函数执行或者立即执行都可以。

// !async function f2(){
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }()
//上面的测试连接代码成功后就可以注释掉了

// id:1  text:hello ,createdAt:'创建事件' updatedAt：'更新时间'
const Note = sequelize.define('note', {//定义一个名字叫做note的表结构
    // Model attributes are defined here
    text: {//note的内容
        type: Sequelize.STRING,
        // allowNull: true,
        // omitNull:false,//忽略null，如果设置为true，那么
        // defaultValue: ''
        // primaryKey: true,
        // defaultValue: '',
        allowNull: true,//如果设置为false不允许出现null，出现null的都不显示出来，也就是查询不到
    },
    uid:{//增加这个note 是谁创建的这个归属uid
        type: Sequelize.STRING,
        allowNull: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: true
    }


    // omitNull:false
    // id 会自动去创建，官网的名字叫做UUID，存储唯一通识标识符列,但是经过测试显示的还是叫做id的属性
    // https://sequelize.org/master/class/lib/data-types.js~UUID.html
    // 还有默认自己创建的是createdAt创建事件 and updatedAt更新时间
    // https://sequelize.org/master/manual/model-basics.html
});

// User.sync() -如果不存在则创建表（如果已经存在则不执行任何操作）
// User.sync({ force: true }) -这将创建表，如果该表已经存在，则将其首先删除
// User.sync({ alter: true }) -这将检查数据库中表的当前状态（它具有哪些列，它们的数据类型等），然后在表中进行必要的更改以使其与模型匹配。

// 注意这里需要异步去执行
// Note.sync({ force: true }).then(function () {//异步创建这个数据表
//     Note.create(
//         { text: '1hello world'},

//     );//，然后往这个表里面增加内容
//     console.log("The table for the Note model was just (re)created!");
// // }).then(function () {
// //     // raw 是返回原始数据结果https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
// //     Note.findAll({
// //         raw:true,
// //         attributes:['text']
// //     })
// //     .then(function (notes) {//查找内容
// //         console.log(notes)//查找到就去展示这个数据
// //         // console.log(Sequelize.STRING,'Sequelize.STRING')
// //         // console.log(DataTypes.STRING,'DataTypes.STRING')
// //         // console.log(DataTypes,'DataTypes')
// //         // console.log(Sequelize,'Sequelize')
// //     });
    
// })
// Note.sync({ force: true })
     Note.create(
         { text: '新建的数据',
            uid:555,
        },
     )

// Note.findAll({
//     raw:true
// })
//     .then(function (notes) {
//         console.log(notes,'notes')
//     })


module.exports.Note=Note
