// these variables are the names of the devDependencies
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// (nameOfTask to call later, function to run when we tell gulp to run task)

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
