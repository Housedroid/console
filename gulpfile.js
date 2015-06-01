// requires
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var connect = require('gulp-connect');
//var karma = require('karma').server;
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var PATH = {
  DEST: './dest',
  MAPS: './maps',
  SRC: './src',
  TMP: './tmp',
  TEST: './test/**/*'
};

gulp.task('build/svg', function () {
  gulp.src(PATH.SRC + '.svg')
  .pipe(svgmin())
  .pipe(svgstore({ fileName: 'icons.svg', prefix: 'icon-' })) // @todo: change fileName
  .pipe(gulp.dest(PATH.DEST))
});

gulp.task('build/css', function () {
	// set up all postcss processors
	var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        mqpacker,
        csswring
    ];

    // run sass compilation and postcss processiong
    gulp.src(PATH.SRC + '/**/*.scss', {base: PATH.SRC})
	  .pipe(sourcemaps.init())
	    .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
	    .pipe(postcss(processors))
	  .pipe(gulp.dest(PATH.TMP))
      .pipe(concat('styles.css'))
      .pipe(sourcemaps.write(PATH.MAPS))
      .pipe(gulp.dest(PATH.DEST))
      .pipe(connect.reload());
});

gulp.task('build/js', function() {
	/*var tsProject = ts.createProject({
	    declarationFiles: false,
	    noExternalResolve: true
	});
	
    return gulp.src(PATH.SRC + '.ts', {base: '.'})
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write(PATH.MAPS))
    .pipe(gulp.dest(PATH.DEST)
    .pipe(connect.reload());*/
});

gulp.task('build/jsx', function() {


    return browserify({
            entries: [PATH.SRC + '/scripts/app.jsx'],
            extensions: ['.jsx', 'js'],
            debug: true
        })
        .transform(reactify)
        .bundle()
        .pipe(source('components.js'))
        .pipe(gulp.dest(PATH.DEST))
        .pipe(connect.reload());
});

gulp.task('build/html', function() {
    gulp.src(PATH.SRC + '/**/*.html', {base: PATH.SRC})
        .pipe(gulp.dest(PATH.DEST))
        .pipe(connect.reload());

    gulp.src(PATH.SRC + '/**/*.woff', {base: PATH.SRC})
        .pipe(gulp.dest(PATH.DEST))
        .pipe(connect.reload());
});

gulp.task('build/test', function() {
  /*var tsProject = ts.createProject({
      declarationFiles: false,
      noExternalResolve: true
  });
  
    return gulp.src(PATH.TEST + '.ts', {base: '.'})
    .pipe(ts(tsProject))
    .pipe(gulp.dest(PATH.TEST)
    .pipe(connect.reload());*/
});

gulp.task('test/singlerun', function (done) {
  karma.start({
    configFile: './karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('test/watch', function (done) {
  karma.start({
    configFile: './karma.conf.js'
  }, done);
});

gulp.task('build', ['build/css','build/jsx', 'build/js', 'build/html', 'build/test']);

// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(PATH.SRC + '/**/*', ['build']);
  //gulp.watch(PATH.TEST, ['build']);
});


// WEB SERVER
gulp.task('serve', function() {
  connect.server({
    root: ['./dest'],
    port: 8000,
    livereload: true
  });
});


gulp.task('default', ['build', 'serve', 'watch']);