'use strict';

module.exports = function () {
  $.gulp.task('cleanApp', function () {
    return $.del($.path.app);
  });
  // - - - - -
  $.gulp.task('cleanPublic', function () {
    return $.del($.path.public + '**');
  });
};
//
// del(['tmp/*.js', '!tmp/unicorn.js']).then(paths => {
//   console.log('Deleted files and folders:\n', paths.join('\n'));
// });
