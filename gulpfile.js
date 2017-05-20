var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['test']);

gulp.task('debug', shell.task('node --inspect --debug-brk division.js'));

gulp.task('run', shell.task('node division.js'));

gulp.task("doc", shell.task("documentation build division.js -f html -o docs"));

gulp.task('test', shell.task('./node_modules/karma/bin/karma start --single-run --browsers Chrome,Firefox'));