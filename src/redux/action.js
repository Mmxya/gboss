import {reqRegister,reqLogin} from '../api'
import {AUTH_SUCCESS,ERROR_MSG} from './action-type';

//错误信息的同步action
export const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})

//请求成功的同步action
export const authsuccess=(user)=>({type:AUTH_SUCCESS,data:user})

//异步注册action
export const register=({name,pwd,pwd2,type})=>{
    //做前台验证，如果失败，返回一个失败action
    if(!name || !pwd){
        return errorMsg("用户名或密码不能为空")
    }else if(pwd !== pwd2){
        return errorMsg("两次密码不一致")
    }
    //如果成功了发送异步的请求
    return dispatch=>{
        reqRegister({name,pwd,type})
            .then(response=>{
                const result=response.data;
                //如果成功了分发一个成功的action
                if(result.code===0){
                    dispatch(authsuccess(result.data))
                }else {
                    //如果失败了返回一个失败的action信息
                    dispatch(errorMsg(result.msg))
                }
            })
    }
}


//异步登录
export const login=({name,pwd})=>{
    //做前台验证，如果失败返回错误信息
    if(!name || !pwd){
        errorMsg("用户名或密码不能为空")
    }
    return dispatch=> {
        //如果成功发送异步请求
       reqLogin({name,pwd})
           .then(response=>{
               const result=response.data;
               //如果成功分发一个成功action
               if (result.code===0){
                  dispatch(authsuccess(result.data))
               }else {
                   dispatch(errorMsg(result.msg))
               }
               //如果成功分发一个错误action

           })
    }
}