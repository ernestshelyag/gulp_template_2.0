'use strict';

module.exports = function () {
  // - - - - -
  $.gulp.task('copyPug', function () {
    return $.gulp.src($.path.pug + '**')
      .pipe($.gulp.dest($.path.public + 'pug/'));
  });
  // - - - - -
  $.gulp.task('css+js', function () {
    return $.gulp.src($.path.app + '*.html')
      .pipe($.useref())
      .pipe($.gulpIf('*.js', $.uglify()))
      .pipe($.gulpIf('*.css', $.cssmin()))
      .pipe($.gulp.dest($.path.public));
  });
};
