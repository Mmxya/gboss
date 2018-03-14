/*
 后台应用的路由器模块
 1. 引入express
 2. 得到路由器
 3. 注册n个路由
 4. 向外暴露路由器
 5. 通过 app使用上路由器
 */
// 1. 引入express
const express=require('express');
const md5=require('blueimp-md5');
const models=require('./models');
const UserModel=models.getModel('user');
const filter={pwd:0}//过滤条件
// 2. 得到路由器
const router=express.Router();

// 3. 注册n个路由
router.post("/register",function (req,res) {
    const {name,pwd,type}=req.body;
    UserModel.findOne({name},function (err,user) {
        if (user){
            res.send({code:1,msg:"用户已存在！"})
        }else {
            // 2.2. 如果不存在, 将提交的user保存到数据库
            new UserModel({name,pwd:md5(pwd),type}).save(function (err,user) {
                res.cookie('userid',user._id)
                res.send({code:0,data:{_id:user._id,name,type}})
            })
        }
    })
})
//注册登录路由
router.post("/login",function (req,res) {
    const {name,pwd}=req.body;
    UserModel.findOne({name,pwd:md5(pwd)},filter,function (err,user) {
        if(!user){
            res.send({code:1,msg:"用户名或密码错误！"})
        }else {
            res.cookie('userid',user._id)
            res.send({code:0,data:user})
        }
    })
})


// 4. 向外暴露路由器
module.exports=router;
// 5. 通过 app使用上路由器