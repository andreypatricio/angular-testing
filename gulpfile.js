var js  = [
    './tests/*'
];
 
var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
 
gulp.task('minify-js', function () {
    gulp.src(js)                        
    .pipe(concat('app.js'))     
    .pipe(uglify())                     
    .pipe(gulp.dest('./dist/'));
});
 
gulp.task('default',['minify-js']);
 
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
});