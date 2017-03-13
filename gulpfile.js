// these variables are the names of the devDependencies
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
//this package returns a function. we tell that function to immediately run by placing empty parenthesis after to "require: require('bower-files')();" returns all files in bower.json
var lib = require('bower-files')({
  //pass object into initial call to the bower-files package with some initialization settings in it in order to tell the bower-files package where to find the Bootstrap files we're interested in. special case with bootstrap
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var browserSync = require('browser-sync').create();

var buildProduction = utilities.env.production;

// (nameOfTask to call later, function to run when we tell gulp to run task)

//the order of dependencies is ignored so we can't use this kind of method without callback function if we care about one task running before another
gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('bowerJS', function() {
  //gulp.src pulls in all JS files and outputs one concatenated, minified file called vendor.js that we will load in our index.html. ext(js) filters out only the js files
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

//ext(css) only gets the files that end in .css
gulp.task('bowerCSS', function(){
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function () {
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build.js"));
});

gulp.task("build", ['clean'], function(){
  if(buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task("clean", function() {
  //delete the entire build and tmp folders. how do we delete a file at a time?
  return del(['build', 'tmp']);
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      //starting point is in home directory and the starting place for the app is index.html
      baseDir: "./",
      index: "index.html"
    }
  });
  //this method watches for any changes to .js files or bower dependencies. if change, run jsBuild task
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});

//Write tasks per "watches" from bower sync  serve task (above)
//lists array of dependency tasks that need to be run whenever a .js file changes
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function () {
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function() {
  bowerSync.reload();
});
