const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let extractStyles = new ExtractTextPlugin('css/common.css')

module.exports = {
	context: __dirname,
	devtool: 'source-map',
	entry: {
		app: './src/js/app.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				},
				include: './src/js',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: extractStyles.extract({
					loader: [
						{
							loader: "css-loader"
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				})
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: true,
			options: {
				postcss: [
					autoprefixer({
						browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
					})
				]
			}
		}),
		extractStyles,
	],
	devServer: {
		contentBase: __dirname + '/dist',
	}
};