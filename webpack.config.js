const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssExtractText = new ExtractTextPlugin( "css/common.css" );
const sassLoader = cssExtractText.extract( 'style',"css?sourceMap&minimize!postcss?sourceMap!sass?sourceMap");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports={
	context: __dirname,
	devtool: 'source-map',
	entry: [
		'./src/js/app.js'
	],
	output: {
		path: __dirname + "/dist",
		filename: "/js/app.min.js"
	},
	stats: {
      children: false  
    },
	module: {
         loaders: [
			 {
				test: /\.js$/,
				include: './src/js',
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ "es2015" ]
				}
			},
			{
				test: /\.scss$/,
				loader: sassLoader
			}
		 ]
    },
	postcss: function () {
        return {
            defaults: [autoprefixer],
            cleaner:  [autoprefixer({ browsers: ['IE 10', 'IE 11', 'firefox 20', 'ios_saf 8.4', 'android 4.3'] })]
        };
    },
	plugins: [
		new BabiliPlugin(),
		cssExtractText
	],
};