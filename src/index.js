/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import axios from 'axios';

const service = axios.create({
	baseURL: '',
});

let pending = [];
let CancelToken = axios.CancelToken;

let cancelPending = (config) => {
	pending.forEach((item, index) => {
		if (config) {
			if (item.UrlPath === config.url) {
				item.Cancel(); // 取消请求
				pending.splice(index, 1) // 移除当前请求记录
			}
		} else {
			item.Cancel(); // 取消请求
			pending.splice(index, 1) // 移除当前请求记录
		}
	})
};

// 将请求写入pending
service.interceptors.request.use(config => {
	cancelPending(config);
	config.cancelToken = new CancelToken(res => {
		pending.push({'UrlPath': config.url, 'Cancel': res})
	});
	return config;
});

export default service;
