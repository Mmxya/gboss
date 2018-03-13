/**
 * Created by 马晓莹 on 2018/3/13.
 */
/*
 测试使用mongoose操作mongodb数据库的模块
 1. 连接数据库
 1.1. 引入mongoose
 1.2. 连接指定数据库(URL只有数据库是变化的)
 1.3. 获取连接对象
 1.4. 绑定连接完成的监听(用来提示连接成功)
 2. 得到对应特定集合的Model
 2.1. 字义Schema(描述文档结构)
 2.2. 定义Model(与集合对应, 可以操作集合)
 3. 通过Model或其实例对集合数据进行CRUD操作
 3.1. 通过Model实例的save()添加数据
 3.2. 通过Model的find()/findOne()查询多个或一个数据
 3.3. 通过Model的findByIdAndUpdate()更新某个数据
 3.4. 通过Model的remove()删除匹配的数据
 */

// 1. 连接数据库
// 1.1. 引入mongoose
const mongoose=require('mongoose');
// 1.2. 连接指定数据库(URL只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/user_test');
// 1.3. 获取连接对象
const conn=mongoose.connection;
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected',function () {
    console.log('数据库连接成功')
})

// 2. 得到对应特定集合的Model
const UserSchema=mongoose.Schema({
    // 用户名
    'name': {type: String, 'required': true},
    // 密码
    'pwd': {type: String, 'required': true},
    // 类型
    'type': {'type': String, 'required': true},
    // 头像
    'avatar': {'type': String},
    // 个人简介或者职位简介
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    // 如果你是boss 还有两个字段
    // 公司名称
    'company': {'type': String},
    // 工资
    'money': {'type': String}
})
// 2.1. 字义Schema(描述文档结构)
// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel=mongoose.model('user',UserSchema);

// 3. 通过Model或其实例对集合数据进行CRUD操作

// 3.1. 通过Model实例的save()添加数据
function testSave() {
    const user={
        name:'bobo',
        pwd: '123',
        type: 'boss',
        avatar: 'girl'
    }
    const  userModel=new UserModel(user);
    userModel.save(function (err,user) {
        console.log('save',err,user)
    })
}
//testSave();
// 3.2. 通过Model的find()/findOne()查询多个或一个数据
function testFind() {
    UserModel.find(function (err,user) {
        console.log('find',err,user)
    })
    UserModel.findOne({_id:'5aa7c9bcb87cf2033002e57e'},function (err,user) {
        console.log('findOne',err,user)
    })
}
//testFind();
// 3.3. 通过Model的findByIdAndUpdate()更新某个数据
function testUpdate() {
    UserModel.findByIdAndUpdate({_id:'5aa7c9bcb87cf2033002e57e'},{name:'tom'},function (err,user) {
        console.log('testUpdate',err,user)
    })
}
//testUpdate();
// 3.4. 通过Model的remove()删除匹配的数据
function testDelete() {
    UserModel.remove({_id:'5aa7c9bcb87cf2033002e57e'},function (err,user) {
        console.log('remove()',err,user)
    })
}
testDelete();