import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
// 样式
import '../css/base.css';
// 导入Prodiver connect
import {Provider,connect} from 'react-redux';
// 导入stroe
import store from './reactRedux/store.js';
// 导入connect需要的函数
import {mapStateToProps,mapDispatchToProps} from './reactRedux/dispatch.js';
// UI层
import Count from './UIcomponent/Conut.jsx';


const App=connect(mapStateToProps,mapDispatchToProps)(Count);
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')	
)
