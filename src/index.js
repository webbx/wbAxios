/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import axios from 'axios';

// 创建一个axios实例
const service = axios.create({});

// 请求队列存储器
let pending = [];
let CancelToken = axios.CancelToken;

// 清除指定请求
service.cancel = url => {
	if (url) {
		pending.forEach((item, index) => {
			if (item.UrlPath === url) {
				item.Cancel(); // 取消请求
				pending.splice(index, 1) // 移除当前请求记录
			}
		})
	}
};

let cancelPending = (config) => {
	pending.forEach((item, index) => {
		if (config) {
			// 重复请求处理，点击多次
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

// 将请求写入请求队列存储器
service.interceptors.request.use(config => {
	cancelPending(config);
	config.cancelToken = new CancelToken(res => {
		pending.push({'UrlPath': config.url, 'Cancel': res})
	});
	return config;
});

export default service;
