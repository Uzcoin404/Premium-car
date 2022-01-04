var ttf2woff2 = require('gulp-ttf2woff2');
module.exports = () => 
$.gulp.task('fonts', () =>
$.gulp.src($.path.src.fonts)
.pipe($.gulp.dest($.path.dist.fonts))
.pipe($.gp.ttf2woff2())
.on('end', $.bs.reload)
)