var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function JS() {
    return gulp.src('src/isEmpty.js')
        .pipe(gulp.dest('dist'));
}

function minJS() {
    return gulp.src('src/isEmpty.js')
        .pipe(uglify())
        .pipe(rename('isEmpty.min.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(
    JS,
    minJS
));