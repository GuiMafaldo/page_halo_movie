const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const image = require('gulp-imagemin');


function imageMin() {
    return gulp.src('./src/imagens/**/*')
    .pipe(gulp.dest('./dist/images'))
}

function sassCompiler() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe (gulp.dest('./dist/css'));
}


exports.default = gulp.parallel(imageMin, sassCompiler);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(sassCompiler))

}
