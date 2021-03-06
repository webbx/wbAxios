/**
 * webpack-dev.config.js
 * @author wangbo
 * @since 2020/3/9
 * @github https://github.com/BoWang816
 */
const path = require('path');
const webpack = require('webpack');
const genRules = require('./webpack-loader.config');

const config = {
	mode: 'development',

	// map
	//  http://www.css88.com/doc/webpack2/configuration/devtool/
	devtool: 'cheap-eval-source-map',

	// 入口文件配置
	context: path.join(__dirname, "./src/"),

	// 入口文件配置
	entry: {
		index: './demo/index.js'
	},

	// 文件导出的配置
	output:{
		filename: "index.js",
		// publicPath 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
		publicPath: "/"
	},

	// 处理项目中的不同类型的模块
	module: {
		rules: genRules('src', true)
	}
};

module.exports = config;
