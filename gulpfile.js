// these variables are the names of the devDependencies
var gulp = require('gulp');

// (nameOfTask to call later, function to run when we tell gulp to run task)
gulp.task('myTask', function(){
  console.log('hello gulp');
});
