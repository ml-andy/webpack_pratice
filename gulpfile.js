'use strict';
// var config = require('./config.json');
var gulp= require('gulp');
var webpack = require('webpack');
var gutil = require( "gulp-util" );
var $ = require('gulp-load-plugins')();
var imageminPngquant = require('imagemin-pngquant');
var imageminMozjpeg = require('imagemin-mozjpeg');
var WebpackDevServer = require("webpack-dev-server");

//Event
gulp.task('connect', function() {
	$.connect.server({
	root: 'dist/',
	livereload: true
	});
	gulp.src('./dist/')
		.pipe($.open({uri: 'http://localhost:8080/'}))
});
gulp.task('imageminJPG', function () {
	gulp.src('src/images/**/*.jpg')
		.pipe($.plumber())
		.pipe($.changed('dist/images'))	
		.pipe(imageminMozjpeg({quality: 90})())
		.pipe(gulp.dest('dist/images'));
});
gulp.task('imageminPNG', function () {
	gulp.src('src/images/**/*.png')
		.pipe($.plumber())
		.pipe($.changed('dist/images'))	
		.pipe(imageminPngquant({quality: '90'})())
		.pipe(gulp.dest('dist/images'));
});
gulp.task('uploadHTML', function () {
	gulp.src('src/*.html')
		.pipe($.changed('dist'))
		.pipe(gulp.dest('dist'))
		.pipe($.connect.reload());
});
gulp.task('js', function () {
	gulp.src('dist/js/**/*.js')
		.pipe($.plumber())
		.pipe(gulp.dest('dist/js'))
		.pipe($.connect.reload());
});
gulp.task('libjs', function () {
	gulp.src('src/lib/*.js')
		.pipe($.changed('dist/lib'))
		.pipe(gulp.dest('dist/lib'))
		.pipe($.connect.reload());
});
gulp.task('uploadphp', function () {
	gulp.src('src/**/*.php')
		.pipe($.changed('dist'))
		.pipe(gulp.dest('dist'))
		.pipe($.connect.reload());
});
gulp.task('uploadaspx', function () {
	gulp.src('src/**/*.aspx')
		.pipe($.changed('dist'))
		.pipe(gulp.dest('dist'))
		.pipe($.connect.reload());
});
gulp.task("webpack", function(callback) {
	var config = require('./webpack.config.js');
	webpack( config, ( err, stats ) => {
        if ( err ) {
            throw new gutil.PluginError( "webpack", err );
        }
        gutil.log( "[webpack]", stats.toString( { colors: true, progress: true, chunkModules: false }) );
    });
	return gulp.src( './' )
});

gulp.task('watch',function(){
	gulp.watch(['dist/js/**/*.js'],['js']);
	gulp.watch(['src/lib/**/*.js'],['libjs']);
	gulp.watch(['src/images/**/*.jpg'],['imageminJPG']);
	gulp.watch(['src/images/**/*.png'],['imageminPNG']);
	gulp.watch(['src/*.html'],['uploadHTML']);
	gulp.watch(['src/*.php'],['uploadphp']);
	gulp.watch(['src/*.aspx'],['uploadaspx']);
	gulp.watch(['src/js/**/*','src/css/**/*'],['webpack']);
});

//AddListener
gulp.task('default',['connect','watch','webpack']);
