const webpack = require('webpack');
const path = require("path");

module.exports = {
	entry: ['./src/index.jsx'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	watch: true,
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.join(__dirname, '../', 'static/'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [],
};
