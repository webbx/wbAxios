/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import React from 'react';
import ReactDOM from 'react-dom';
import wbAxios from '../index.js';
import './style.less';

class Main extends React.Component{
	constructor(props) {
		super(props);
		let credential = localStorage.ccmsRequestCredential;
		credential = credential ? JSON.parse(credential).id : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRJZCI6InFpdXNoaTYiLCJ1c2VySWQiOjEwNjUxMzg3LCJ1c2VyVHlwZSI6ImJ1aWxkLWluIiwidXNlck5hbWUiOiJmeHQiLCJleHQiOjE1Nzc5NzQ5ODAwOTIsImlhdCI6MTU3NzkzMTc4MDA5Mn0.JR1M3sS0yKkwPvq7G0fE0m5tpzBhj0pH3ubCmOMALiM';
		wbAxios.init('https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock',{'x-token': credential});
	}

	sendRequest = () => {
		wbAxios.get('/test');
	};

	cancelRequest = () => {
		wbAxios.cancel('/test');
	};

	render() {
		return (
			<div>
				<button onClick={this.sendRequest}>发送请求</button>

				<button onClick={this.cancelRequest}>取消请求</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.querySelector('#root')
);
