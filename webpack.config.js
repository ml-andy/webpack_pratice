const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let extractStyles = new ExtractTextPlugin('css/common.css')
let extractHtml = new ExtractTextPlugin('[name].html')
let BabiliPlugin = require("babili-webpack-plugin")

module.exports = {
	context: __dirname,
	devtool: 'source-map',
	entry: {
		index: './src/js/app.js',
		// about: './src/js/about.js',
	},
	output: {
		path: __dirname + '/dist',
		// filename: 'js/[name].js'
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: extractHtml.extract({
					loader: ['html-loader', 'pug-html-loader?pretty&exports=false']
				})
			},
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
							loader: "css-loader?sourceMap"
						},
						{
							loader: "postcss-loader?sourceMap"
						},
						{
							loader: "sass-loader?sourceMap"
						}
					]
				})
			},
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							limit: 2048,
							name: "images/[name].[ext]?[hash:8]",
						}
					},
					{
						loader: 'image-webpack-loader',
						query: {
							progressive: true,
							optimizationLevel: 7,
							interlaced: false,
							pngquant: {
								quality: '65-90',
								speed: 4
							}
						}
					}
				]
			},
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
				],
				sassLoader: {
					includePaths: [__dirname + '/src']
				},
				context: '/'
			}
		}),
		extractStyles,
		extractHtml,
		new webpack.HotModuleReplacementPlugin(),
		//minimize
		// new BabiliPlugin()
	],
	devServer: {
		contentBase: __dirname + '/src',
		port: 9000,
		hot: true,
		inline: true,
		watchContentBase: true,
		watchOptions:{
			ignored: /images/
		}
		// proxy: {
		// 	"/api": {
		// 		target: "https://other-server.example.com",
		// 		secure: false
		// 	}
		// }
	}
};