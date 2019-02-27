var gulp = require('gulp');
var concat = require('gulp-concat');
var rev  = require('gulp-rev-append'); // 给URL自动加上版本号
 
gulp.task('js',function(){   
    gulp.src('js/*.js')       // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
    //.pipe(concat('all.js'))   //合并成的js文件名称
    .pipe(gulp.dest('dist'));    //打包压缩在build目录下。
})
 
//css 打包压缩
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
 
　　gulp.task('style', function() {    //task 任务名称为style
 
　　gulp.src('css/*.css')
 
　　//.pipe(concat('styles.css'))
 
　　.pipe(autoprefix('last 2 versions'))
 
　　.pipe(minifyCSS())
 
　　.pipe(gulp.dest('dist'));
 
　　});

gulp.task('rev',function(){
    gulp.src('test1.html')
        .pipe(rev())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean',function(){
    gulp.src('./dist')
        .pipe(clean());
});

gulp.task('default',function(){
    gulp.run(['js','style','rev']);   //这里开始执行多个task任务
});