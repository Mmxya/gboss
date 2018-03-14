import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {NavBar,List,WhiteSpace,WingBlank,InputItem,Button} from 'antd-mobile';

import {login} from '../../redux/action';
import Logo from '../../components/logo/logo'
 class Login extends React.Component {
    state={
        name:'',
        pwd:'',
        pwd2:'',
        type:'genius'
    }

    handleChange=(name,val)=>{
        this.setState({[name]:val})
    }
    goRegister=()=>{
        this.props.history.replace('/register')
    }
    handleLogin=()=>{
        this.props.login(this.state)
    }
    render() {
        const {user}=this.props;
        if(user.redirectTo){
            return <Redirect to={user.redirectTo}/>
        }
        return (
            <div>
                <NavBar type="paimary">硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {user.msg?<p className="error_msg">{user.msg}</p>:''}
                        <InputItem onChange={(val)=>this.handleChange('name',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={(val)=>this.handleChange('pwd',val)}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.handleLogin}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {login}
)(Login)