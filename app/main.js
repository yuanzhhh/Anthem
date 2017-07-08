import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import reducer from './redux/reducer/index';
import App from './components/App';
import immutable from 'immutable';

import 'vconsole';

//基础规范css
import 'normalize.css/normalize.css';
import './main.css';

const initialState = immutable.Map();
//利用 redux-immutable 生成reducer
const margeReducer = combineReducers(reducer);
//创建 store
const store = createStore(margeReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 检测不必要的更新
// const {whyDidYouUpdate} = require('why-did-you-update');
// let createClass = React.createClass;
// Object.defineProperty(React, 'createClass', {
//   set: (nextCreateClass) => {
//     createClass = nextCreateClass;
//   }
// });
// whyDidYouUpdate(React);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <App/>
  </Provider>, document.body.appendChild(document.createElement('div')));
}
render();
