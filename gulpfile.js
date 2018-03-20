var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    gulp.watch('src/*.js', ['js']);
});

gulp.task('build', ['js'], function () {

});

gulp.task('js', function () {
    gulp.src('src/isEmpty.js')
        .pipe(gulp.dest('dist'));

    gulp.src('src/isEmpty.js')
        .pipe(uglify())
        .pipe(rename('isEmpty.min.js'))
        .pipe(gulp.dest('dist'));
});