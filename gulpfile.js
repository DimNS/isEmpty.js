var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', ['build', 'watcher.js']);

gulp.task('build', ['js', 'js.min']);

gulp.task('watcher.js', function () {
    return gulp.watch('src/*.js', ['build']);
});

gulp.task('js', function () {
    return gulp.src('src/isEmpty.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('js.min', function () {
    return gulp.src('src/isEmpty.js')
        .pipe(uglify())
        .pipe(rename('isEmpty.min.js'))
        .pipe(gulp.dest('dist'));
});