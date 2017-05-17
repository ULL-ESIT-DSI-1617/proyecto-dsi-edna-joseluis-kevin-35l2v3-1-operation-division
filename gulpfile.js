var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['test']);

gulp.task('debug', shell.task('node --inspect --debug-brk index.js'));

gulp.task('run', shell.task('node index.js'));

gulp.task("doc", shell.task("npm run doc"));

gulp.task("test", shell.task("npm test"));