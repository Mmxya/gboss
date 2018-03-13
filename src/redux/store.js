/**
 * Created by 马晓莹 on 2018/3/13.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))