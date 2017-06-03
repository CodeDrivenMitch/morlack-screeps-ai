const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const watch = require('gulp-watch');

const mocha = require('gulp-mocha');
require('babel-core/register');

const settings = require('./settings.js').default;


gulp.task('test', () => {
    // Initialize global mocks so test code compiles and runs initially
    global.Memory = require('./test/mocks/game');
    global.Game = require("./test/mocks/game");
    return gulp.src(['test/**/*.js'])
        .pipe(mocha())
})

gulp.task('clean', () => {
    return gulp.src(settings.outputDir + '/**/*.js')
        .pipe(clean({read: false, force: true}))
});


gulp.task('compile', ['clean'], () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2016']
        }))
        .pipe(gulp.dest(settings.outputDir));
});

gulp.task('watch', () => {
    return gulp.watch('src/*.js', ['compile'])
});

gulp.task('default', ['clean', 'compile']);