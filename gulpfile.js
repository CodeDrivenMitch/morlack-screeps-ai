const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

const settings = require('./settings');


gulp.task('clean', () => {
    return gulp.src(settings.outputDir + '/**/*.js')
        .pipe(clean({read: false, force: true}))
});


gulp.task('compile', ['clean'], () => {

    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(settings.outputDir));
});

gulp.task('default', ['clean', 'compile']);