import React from 'react';
import {NavBar,List,WhiteSpace,WingBlank,InputItem,Button} from 'antd-mobile';
import Logo from '../../components/logo/logo'
export default class Login extends React.Component {
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
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <NavBar type="paimary">硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={(val)=>this.handleChange('name',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={(val)=>this.handleChange('pwd',val)}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type="paimary" onClick={this.handleLogin}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}