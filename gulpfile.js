const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./app/style/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../dist/style'))
});



gulp.task('sass-watch', function() {
    gulp.watch('./app/**/*.scss', ['sass']);
});