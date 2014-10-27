var gulp = require('gulp');
var mocha = require('gulp-mocha');
var run = require('gulp-run');
var notify = require('gulp-notify');

gulp.task('test', function() {
    gulp.src('test/**/*.js')
        .pipe(run('clear'))
        .pipe(mocha())
        .on('error', notify.onError({
            title: "Crap",
            message: "Your tests failed, Brad!"
        }))
        .pipe(notify({
            title: "Success",
            message: "All tests have returned green!"
        }));
});
gulp.task('watch', function() {
    gulp.watch(['test/**/*.js', 'src/**/*.js'], ['test']);
});
gulp.task('default', ['test', 'watch']);
