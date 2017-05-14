const gulp = require('gulp'),
  config = require('../config').build,
  plugins = require('gulp-load-plugins')();

const build = gulp.parallel(html, css, copy);

function html() {
  return gulp.src(config.pug)
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.dest));
}

function css() {
  return gulp.src(config.styl)
    .pipe(plugins.stylus({
      'include css': true
    }))
    .pipe(gulp.dest(config.dest));
}

function copy() {
  return gulp.src(config.copy)
    .pipe(gulp.dest(config.dest));
}

module.exports = build;
