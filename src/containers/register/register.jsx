import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {NavBar,Button,InputItem,Radio,WingBlank,WhiteSpace,List} from 'antd-mobile';

import {register} from '../../redux/action';
import Logo from '../../components/logo/logo'
const RadioItem=Radio.RadioItem;
 class Register extends React.Component {
    state={
        name:'',
        pwd:'',
        pwd2:'',
        type:'genius'
    }

    handleChange=(name,val)=>{
        this.setState({[name]:val})
    }
    goLogin=()=>{
        this.props.history.replace('/login')
    }
    handleRegister=()=>{
        this.props.register(this.state)
    }
    render() {
        const {user} = this.props;

        if (user.redirectTo){
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
                            <InputItem type="password" onChange={(val)=>this.handleChange('pwd2',val)}>确认密码：</InputItem>
                            <WhiteSpace/>
                            <RadioItem checked={this.state.type==='genius'}
                                       onClick={()=>this.handleChange('type','genius')}>牛人</RadioItem>
                            <RadioItem checked={this.state.type==='boss'}
                                       onClick={()=>this.handleChange('type','boss')}>BOSS</RadioItem>
                            <WhiteSpace/>
                            <Button type="primary" onClick={this.handleRegister}>注册</Button>
                            <WhiteSpace/>
                            <Button onClick={this.goLogin}>已有账号</Button>
                        </List>
                    </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {register}
)(Register);
/*
export default connect(
    state=>({user:state.user}),
    {register}
)(Register)  */
