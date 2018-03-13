import React from 'react';
import {NavBar,Button,InputItem,Radio,WingBlank,WhiteSpace,List} from 'antd-mobile';

import Logo from '../../components/logo/logo'
const RadioItem=Radio.RadioItem;
export default class Register extends React.Component {
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
        console.log(this.state)
    }
    render() {
        const {type} = this.state;
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
                            <InputItem type="password" onChange={(val)=>this.handleChange('pwd2',val)}>确认密码：</InputItem>
                            <WhiteSpace/>
                            <RadioItem checked={type==='genuis'}
                                       onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
                            <RadioItem checked={type==='boss'}
                                       onChange={()=>this.handleChange('type','boss')}>BOSS</RadioItem>
                            <WhiteSpace/>
                            <Button type="paimary" onClick={this.handleRegister}>注册</Button>
                            <WhiteSpace/>
                            <Button onClick={this.goLogin}>已有账号</Button>
                        </List>
                    </WingBlank>
            </div>
        )
    }
}