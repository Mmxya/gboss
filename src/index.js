/**
 * Created by 马晓莹 on 2018/3/13.
 */
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'
import store from './redux/store'
import './assets/index.less';
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={Dashboard} />
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'))