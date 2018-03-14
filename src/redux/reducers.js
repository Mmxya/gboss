/**
 * Created by 马晓莹 on 2018/3/13.
 */
import {AUTH_SUCCESS,ERROR_MSG} from './action-type'
import {combineReducers} from 'redux'
const initUser={
    name:'',
    type:'',
    msg:'',
    redirectTo:''
}
function user(state=initUser,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...action.data,redirectTo:'/'}
        case ERROR_MSG:
            return {...state,msg:action.data}
        default:return state;
    }
}

export default combineReducers({user})