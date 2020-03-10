/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import React from 'react';
import ReactDOM from 'react-dom';
import cancelRequest from '../index.js';
import './style.less';

class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	sendRequest = () => {
		cancelRequest.get('https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock/test');
	};

	cancelRequest = () => {
		cancelRequest.cancel('https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock/test');
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
