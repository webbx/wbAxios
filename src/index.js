/**
 * index.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
import axios from 'axios';

const wbAxios = axios.create({});

// 初始化配置请求api地址
wbAxios.init = (baseUrl, headerConfig) => {
	wbAxios.interceptors.request.use(config => {
		config.baseURL = baseUrl;
		const { headers } = config;
		// 设置自定义header
		Object.keys(headerConfig).forEach(function(key){
			headers[key] = headerConfig[key];
		});
		return config;
	});
};

// 请求队列存储器
let pending = [];
let CancelToken = axios.CancelToken;

// 清除指定请求
wbAxios.cancel = url => {
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
wbAxios.interceptors.request.use(config => {
	cancelPending(config);
	config.cancelToken = new CancelToken(res => {
		pending.push({'UrlPath': config.url, 'Cancel': res})
	});

	return config;
});

export default wbAxios;
