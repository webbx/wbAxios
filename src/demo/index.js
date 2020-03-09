/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import React from 'react';
import ReactDOM from 'react-dom';
import cancelRequest from '../index.js';

class Main extends React.Component{
	constructor(props) {
		super(props);
		console.log(props);
	}
	componentDidMount() {
		console.log(cancelRequest());
	}

	render() {
		return (
			<div>
				<button>发送请求</button>

				<button>取消请求</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.querySelector('#root')
);
